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
      map(() => 'enter'),
      tap((val) => console.log('animating enter cards'))
    );
  }



  onInView(e: boolean) {
    console.log('entering cards ', e);
    this.enter.next(e);
  }


  public async onFeedback() {

    const loader = await this.loadingCtrl.create({ message: 'Please wait...' });
    await loader.present();
    const modal = await this.modal.create({ component: FeedbackPage });

    await modal.present();
    await loader.dismiss();
  }

  public onDemo() {
    window.open('https://novadev-4af34.firebaseapp.com', '_blank');
  }

}
