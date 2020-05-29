import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Round } from '../../models/league.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent {

  @Input() public round: Round;

  constructor(private router: Router) {}

  public goToResultsPage() {
    this.router.navigate(['/results', this.round.id])
  }

}
