import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, slideInRight } from 'ng-animate';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('* => enter', useAnimation(fadeInLeft))
    ]),
    trigger('inRight', [
      transition('* => enter', useAnimation(slideInRight))
    ])
  ]
})
export class UsersCardsComponent implements OnInit {

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
      tap((val) => console.log('animating enter cards'))
    );
  }

  onInView(e: boolean) {
    console.log('entering cards ', e);
    this.enter.next(e);
  }

}
