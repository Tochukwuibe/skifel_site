import { Component, OnInit } from '@angular/core';
import { Slides, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';

import { zoomIn, fadeInUp} from 'ng-animate';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('void => *', useAnimation(fadeInUp, {params: {timing: 1.5}}))
    ]),
    trigger('inRight', [
      transition('void => *', useAnimation(fadeInUp, {params: {timing: 1.5}}))
    ]),
    trigger('zoomIn', [
      transition('void => *', useAnimation(zoomIn, {params: {timing: 2}}))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public photo = 'url(../../../../../../../assets/imgs/stacy_pro_phone.png)';
  public photoStyle: { [key: string]: string };

  constructor(
    private router: Router,
    private platform: Platform
  ) { }


  ngOnInit() {
    this.photoStyle = {
      'height':  `${ this.platform.height()}`
    };
  }
  onSlideLoad(slides: Slides) {
    slides.startAutoplay();
  }

  public onBegin() {
    this.router.navigate(['/home'], {fragment: 'why'});
  }

  public onAndroid() {
    this.router.navigate(['/testing', 'android']);
   }
 
   public onIos() {
     this.router.navigate(['/testing', 'ios']);
   }

}
