import { Component, Input, OnInit } from '@angular/core';
import { Round } from '../../models/league.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  @Input() public round: Round;

  constructor() { }

  ngOnInit(): void {
  }

}
