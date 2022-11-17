namespace AF {
  export type Response = ResponseBase & {
    response: ?Array;
  };

  export type TeamsResponse = ResponseBase & {
    response: {
      team: AfTeam;
      venue: AfVenue;
    }[];
  };

  export type FixturesResponse = ResponseBase & {
    response: Fixture[];
  };

  export type FixtureStatResponse = ResponseBase & {
    response: [FixtureStat, FixtureStat];
  };

  export type FixtureStat = {
    team: {
      id: number;
      name: TeamName;
      logo: URI;
    };
    statistics: Stat[];
  };

  export type Fixture = {
    fixture: FixtureDetails;
    league: League;
    teams: {
      home: FixtureTeam;
      away: FixtureTeam;
    };
    goals: FixtureGoal;
    score: {
      halftime: FixtureGoal;
      fulltime: FixtureGoal;
      extratime: FixtureGoal;
      penalty: FixtureGoal;
    };
  };

  type NumberNull = number | null;

  type FixtureDetails = {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {};
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };

  type ResponseBase = {
    get: string;
    parameters: { [key: string]: string };
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
  };

  type URI = string;
  type TeamName = string;

  type FixtureGoal = {
    home: NumberNull;
    away: NumberNull;
  };

  type League = {
    id: number;
    name: string;
    country: string;
    logo: URI;
    flag: URI;
    season: number;
    round: string;
  };

  type FixtureTeam = {
    id: number;
    name: TeamName;
    logo: URI;
    winner: null | boolean;
  };

  type Team = {
    id: number;
    name: TeamName;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: URI;
  };

  type Venue = {};

  type Stat = {
    type: StatType;
    value: NumberNull;
  };

  type StatType =
    | 'Shots on goal'
    | 'Shots off Goal'
    | 'Total Shots'
    | 'Blocked Shots'
    | 'Shots insidebox'
    | 'Shots outsidebox'
    | 'Fouls'
    | 'Corner Kicks'
    | 'Offsides'
    | 'Ball Possession'
    | 'Yellow Cards'
    | 'Red Cards'
    | 'Goalkeeper Saves'
    | 'Total passes'
    | 'Passes accurate'
    | 'Passes %';
}
