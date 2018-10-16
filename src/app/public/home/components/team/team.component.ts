import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../../../models/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public member: TeamMember = {
    name: 'John Doe',
    email: 'John.doe@gmail.com',
    pic: '../../../../assets/icon/favicon.ico'
  };

  constructor() { }

  ngOnInit() {
  }

}
