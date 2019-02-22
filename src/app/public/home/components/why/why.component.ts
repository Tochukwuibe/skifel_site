import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import { Subject, Observable } from 'rxjs';
import { filter, map, skip, first, tap } from 'rxjs/operators';


@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('* => enter', useAnimation(slideInLeft))
    ]),
    trigger('inRight', [
      transition('* => enter', useAnimation(slideInRight))
    ])
  ]
})
export class WhyComponent implements OnInit, OnDestroy {

  public money: string;
  public time: string;
  public difficult: string;

  private enter = new Subject<boolean>();

  public enter$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.setTexts();

    const enterFil$ = this.enter.pipe(
      filter(res => !!res),
      skip(1)
    );

    this.enter$ = enterFil$.pipe(
      first(),
      map(() => 'enter'),
      tap((val) => console.log('animating enter why'))
    );
  }





  onInView(e: boolean) {
    this.enter.next(e);
  }


  private setTexts() {
    this.money = '"Having to jump between multiple apps to sucessfully promote or find entertaining events is a hassel."';
    this.time = "\"Most event sharing platforms are just stacks of digital flyers that can't keep my attention for more than 5 minutes.\"";
    this.difficult = "\"I want to know whether or not an event is going to be worth my time as soon as possible.\"";
 
  }


  ngOnDestroy() {
    this.enter.complete();
  }
}
