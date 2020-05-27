export interface Player {
  name: string,
  points: number
}

export interface Round {
  id: number,
  nextRoundCount: number,
  players: Player[]
}

export interface League {
  title: string,
  rounds: Round[]
}


