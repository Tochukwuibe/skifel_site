import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-support-group',
  templateUrl: './support-group.page.html',
  styleUrls: ['./support-group.page.scss'],
})
export class SupportGroupPage implements OnInit {

  public width = 600;

  constructor(
    private platform: Platform
  ) { }

  ngOnInit() {
    
    const width = Math.round(this.platform.width() * 0.9);
    this.width = width < 1000 ? width : 800;
   
  }

}
