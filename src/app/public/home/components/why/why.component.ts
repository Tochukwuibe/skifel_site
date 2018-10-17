import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
  animations: [
    trigger('inLeft', [
      transition('void => *', useAnimation(slideInLeft))
    ])
  ]
})
export class WhyComponent implements OnInit {

  public money: string;
  public time: string;
  public difficult: string;

  constructor() { }

  ngOnInit() {
    this.money = 'Going out with friends and having a good time can become very expensive';
    this.time = 'I spend a lot of time going through Instagram, Twitter etc.. trying yo find fun things to do with my free time.';
    this.difficult = 'There isn`t enough open things to do around me, they are just too exclusive and difficult to be a part of';
  }

}
