import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FeedbackPage } from '../../modals/feedback/feedback.page';
import { Subject, Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
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
    private modal: ModalController,
    private loadingCtrl: LoadingController
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

  public onDemo() {
    window.open('https://skiffel-demo.firebaseapp.com/#/home', '_blank');
  }

}
