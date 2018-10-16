import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-why-card',
  templateUrl: './why-card.component.html',
  styleUrls: ['./why-card.component.scss']
})
export class WhyCardComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
