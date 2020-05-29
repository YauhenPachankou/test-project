import { Component } from '@angular/core';

import { LeagueDataService } from '../../services/league-data.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  constructor(public leagueDataService: LeagueDataService) { }

}
