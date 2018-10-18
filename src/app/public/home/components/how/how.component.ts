import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, skip, first, map, tap } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn, slideInLeft, slideInRight, fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  animations: [
    trigger('bulb', [
      transition('* => enter', useAnimation(zoomIn))
    ]),
    trigger('inLeft', [
      transition('* => enter', useAnimation(fadeInLeft))
    ]),
    trigger('inRight', [
      transition('* => enter', useAnimation(slideInRight))
    ])
  ]
})
export class HowComponent implements OnInit, OnDestroy {

  private enter = new Subject<boolean>();

  public enter$: Observable<string>;

  constructor() { }

  ngOnInit() {
    const enterFil$ = this.enter.pipe(
      filter(res => !!res),
    );

    this.enter$ = enterFil$.pipe(
      first(),
      map(() => 'enter'),
      tap((val) => console.log('animating enter how'))
    );
  }


  onInView(e: boolean) {
    console.log('entering how ', e);
    this.enter.next(e);
  }


  ngOnDestroy() {
    this.enter.complete();
  }
}
