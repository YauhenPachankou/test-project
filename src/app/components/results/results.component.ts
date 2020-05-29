import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LeagueDataService } from '../../services/league-data.service';
import { Match } from '../../models/league.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public roundsCount: number;

  public currentRound: number;

  public dataSource: Match[];

  public displayedColumns: string[] = ['date', 'homeTeam', 'awayTeam', 'result'];

  constructor(
    public leagueDataService: LeagueDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.roundsCount = this.leagueDataService.leagueData.rounds.length;

    this.route.params
      .subscribe((params) => {
        this.currentRound = +params['id'];

        this.dataSource = this.leagueDataService.getCurrentRoundResults(params['id']).matches;
      })
  }

  public redirectToPreviousRound(): void {
    if (this.currentRound > 1) {
      this.router.navigate(['/results', this.currentRound-1]);
    }
  }

  public redirectToNextRound(): void {
    if (this.roundsCount > this.currentRound) {
      this.router.navigate(['/results', this.currentRound+1]);
    }
  }

}
