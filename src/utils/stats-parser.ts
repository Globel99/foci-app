export default (stats: AF.Stat[]) => Object.fromEntries(stats.map((stat) => [stat.type, stat.value]));
