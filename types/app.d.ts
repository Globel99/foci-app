import { Fixture, NumberNull, StatType } from './api-football';

export type FixtureStat = {
  [key in StatType]: NumberNull;
};

export type Match = {
  fixture: Fixture;
  stats: { home: FixtureStat; away: FixtureStat };
};
