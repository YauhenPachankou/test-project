import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './components/results/results.component';
import { StandingsComponent } from './components/standings/standings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'standings',
    pathMatch: 'full'
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'results/:id',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
