import { Injectable } from '@angular/core';

import { League, Round } from '../models/league.model';
import { league } from '../mocks/league.mock';

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  public leagueData: League;

  constructor() {
    this.leagueData = league;
  }

  public getCurrentRoundResults(id: string): Round {
    return this.leagueData.rounds.find((round) => round.id === +id);
  }

}
