export type ApiFootballResponse = ResponseBase & {
  response: {}[];
};

export type AfTeamsResponse = ResponseBase & {
  response: {
    team: AfTeam;
    venue: AfVenue;
  }[];
};

export type AfFixturesResponse = ResponseBase & {
  response: AfFixture[];
};

export type AfFixture = {
  fixture: Fixture;
  league: League;
  teams: {
    home: AfFixtureTeam;
    away: AfFixtureTeam;
  };
  goals: FixtureGoal;
  score: {
    halftime: FixtureGoal;
    fulltime: FixtureGoal;
    extratime: FixtureGoal;
    penalty: FixtureGoal;
  };
};

type Fixture = {
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
  home: number | null;
  away: number | null;
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

type AfFixtureTeam = {
  id: number;
  name: TeamName;
  logo: URI;
  winner: null | boolean;
};

type AfTeam = {
  id: number;
  name: TeamName;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: URI;
};

type AfVenue = {};
