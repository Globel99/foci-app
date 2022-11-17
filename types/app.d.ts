namespace APP {
  export type FixtureStat = {
    [k: AF.StatType]: AF.NumberNull;
  };

  export type Match = {
    fixture: AF.Fixture;
    stats: { home: FixtureStat; away: FixtureStat };
  };
}
