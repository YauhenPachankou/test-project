import { Pipe, PipeTransform } from '@angular/core';
import { Round } from '../models/league.model';

@Pipe({
  name: 'sortRounds'
})
export class SortRoundsPipe implements PipeTransform {

  public transform(rounds: Round[]): Round[] {
    return rounds.sort((a, b) => b.id - a.id);
  }

}
