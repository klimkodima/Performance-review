import { StatisticCircleDataType } from './types';

export const filterTeams = (
  data: StatisticCircleDataType[],
  filter: string[]
): StatisticCircleDataType[] => {
  let filteredData: StatisticCircleDataType[] = data;

  if (filter.length === 1) {
    const tempo = filteredData.filter((data) => data.title === filter[0]);
    filteredData = [
      ...tempo,
      ...data.filter((data) => data.title !== filter[0])
    ];
  }

  if (filter.length >= 2) {
    const tempo = filteredData.filter((data) => filter.includes(data.title));
    tempo.sort((a, b) =>
      a.title.toLowerCase() <= b.title.toLowerCase() ? -1 : 1
    );
    filteredData = [
      ...tempo,
      ...data.filter((data) => !filter.includes(data.title))
    ];
  }
  return filteredData;
};
