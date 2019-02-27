import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, slideInRight, zoomIn } from 'ng-animate';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private router: Router,
    private toastCtrl: ToastController
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
    const toast = await this.toastCtrl.create({
      message: 'The app is currently under maintainance in preparation for its launch',
      closeButtonText: 'OK',
      position: 'top',
      showCloseButton: true
    })
    await toast.present();
  }

  public onAndroid() {
    window.open('https://play.google.com/store/apps/details?id=com.eth.skiffel', '_blank');
  } 

  public onIos() {
    window.open('https://itunes.apple.com/us/app/skiffel/id1454181015', '_blank');
  }

}
