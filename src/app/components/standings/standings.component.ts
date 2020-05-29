import { Component } from '@angular/core';

import { LeagueDataService } from '../../services/league-data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {

  constructor(public leagueDataService: LeagueDataService) {}

}
