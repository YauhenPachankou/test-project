import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeagueComponent } from './components/league/league.component';
import { RoundComponent } from './components/round/round.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SortPlayersPipe } from './pipes/sort-players.pipe';
import { SortRoundsPipe } from './pipes/sort-rounds.pipe';
import { PlayerStatusDirective } from './directives/player-status.directive';
import { ResultsComponent } from './components/results/results.component';
import { StandingsComponent } from './components/standings/standings.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    RoundComponent,
    ProgressComponent,
    SortPlayersPipe,
    SortRoundsPipe,
    PlayerStatusDirective,
    ResultsComponent,
    StandingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
