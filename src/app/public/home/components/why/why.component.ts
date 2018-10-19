import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import { Subject, Observable } from 'rxjs';
import { filter, scan, map, skip, switchMap, first, tap } from 'rxjs/operators';


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
    this.money = 'Going out with friends and having a good time can become very expensive.';
    this.time = 'I spend a lot of time going through Instagram, Twitter etc.. trying to find things to do in my free time.';
    this.difficult = 'There aren`t enough open things to do around me, they are just too exclusive and difficult to be a part of.';
  }


  ngOnDestroy() {
    this.enter.complete();
  }
}
