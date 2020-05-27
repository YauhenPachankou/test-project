import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/league.model';

@Pipe({
  name: 'sortPlayers'
})
export class SortPlayersPipe implements PipeTransform {

  public transform(rounds: Player[]): Player[] {
    return rounds.sort((a, b) => b.points - a.points);
  }

}
