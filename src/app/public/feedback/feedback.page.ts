import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {



  public iframeUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScT3o6V9MDA1W-Wy840ldLUZAMFIpvYGMWM9PrPDJ8dHv4MhQ/viewform?embedded=true';

  public width = 600;

  constructor(
    private platform: Platform
  ) { }

  ngOnInit() {
    
    const width = Math.round(this.platform.width() * 0.9);
    this.width = width < 1000 ? width : 800;
   
  }

}
