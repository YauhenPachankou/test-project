import { Component, OnInit } from '@angular/core';
import { league } from '../../mocks/league.mock'
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  public league: League;

  public ngOnInit(): void {
    this.league = league;
  }

}
