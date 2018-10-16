import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public photo = 'url(../../../../../../../assets/imgs/stacy_pro_phone.png)';


  constructor(
    private router: Router
  ) { }


  ngOnInit() {

  }
  onSlideLoad(slides: Slides) {
    slides.startAutoplay();
  }

  public onBegin() {
    this.router.navigate(['/home'], {fragment: 'why'});
  }

}
