export interface Player {
  name: string,
  points: number
}

export interface Match {
  date: string,
  result: string,
  homeTeam: string,
  awayTeam: string
}

export interface Round {
  id: number,
  date: string,
  nextRoundCount: number,
  players: Player[],
  matches: Match[]
}

export interface League {
  title: string,
  rounds: Round[]
}


