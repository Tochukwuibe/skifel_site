import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides, Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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

}
