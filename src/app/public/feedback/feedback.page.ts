import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {



  public iframeUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScT3o6V9MDA1W-Wy840ldLUZAMFIpvYGMWM9PrPDJ8dHv4MhQ/viewform?embedded=true';

  constructor(

  ) { }

  ngOnInit() {
  }

}
