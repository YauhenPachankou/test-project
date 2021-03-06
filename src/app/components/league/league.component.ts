import { Component } from '@angular/core';
import { LeagueDataService } from '../../services/league-data.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent {

  constructor(public leagueDataService: LeagueDataService) {}

}
