import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../../../../models/models';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() teamMember: TeamMember;

  constructor() { }

  ngOnInit() {
  }

}
