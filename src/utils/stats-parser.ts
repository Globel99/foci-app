import { Stat } from '../../types/api-football';
import { NumberNull, StatType } from '../../types/api-football';

type ParsedStats = { [key in StatType]: NumberNull };

export default (stats: Stat[]): ParsedStats => {
  const parsedStats: ParsedStats = {} as ParsedStats;

  stats.forEach(stat => {
    parsedStats[stat.type] = stat.value;
  });

  return parsedStats;
};
