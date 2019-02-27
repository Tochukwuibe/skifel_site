import { Component, OnInit } from '@angular/core';
import { Slides, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';

import { zoomIn, fadeInUp } from 'ng-animate';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('void => *', useAnimation(fadeInUp, { params: { timing: 1.5 } }))
    ]),
    trigger('inRight', [
      transition('void => *', useAnimation(fadeInUp, { params: { timing: 1.5 } }))
    ]),
    trigger('zoomIn', [
      transition('void => *', useAnimation(zoomIn, { params: { timing: 2 } }))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public photo = 'url(../../../../../../../assets/imgs/stacy_pro_phone.png)';
  public photoStyle: { [key: string]: string };

  public launchDate = new Date();

  constructor(
    private router: Router,
    private platform: Platform,
    private toastCtrl: ToastController
  ) { }


  ngOnInit() {
    this.photoStyle = {
      'height': `${this.platform.height()}`
    };
  }
  onSlideLoad(slides: Slides) {
    slides.startAutoplay();
  }

  public onBegin() {
    this.router.navigate(['/home'], { fragment: 'why' });
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
