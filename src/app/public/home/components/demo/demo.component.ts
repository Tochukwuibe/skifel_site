import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, slideInRight, zoomIn } from 'ng-animate';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('* => enter', useAnimation(fadeInLeft))
    ]),
    trigger('inRight', [
      transition('* => enter', useAnimation(slideInRight))
    ]),
    trigger('zoomin', [
      transition('* => enter', useAnimation(zoomIn))
    ])
  ]
})
export class DemoComponent implements OnInit {



  private enter = new Subject<boolean>();
  public enter$: Observable<string>;


  constructor(
  ) { }

  ngOnInit() {

    const enterFil$ = this.enter.pipe(
      filter(res => !!res),
    );

    this.enter$ = enterFil$.pipe(
      first(),
      map(() => 'enter')
    );
  }



  onInView(e: boolean) {
    this.enter.next(e);
  }


  public async onFeedback() {


  }

  public onAndroid() {
    window.open('https://play.google.com/store/apps/details?id=com.jaynus.nova', '_blank');
  }

  public onIos() {

  }

}
