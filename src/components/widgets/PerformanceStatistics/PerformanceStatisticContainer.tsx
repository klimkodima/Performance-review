import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import PerformanceStatistic from './PerformanceStatistic';

type TDataAPI = {
  name: string;
  data: number[];
}[];

type TOptionPerfStat = {
  animation: boolean;
  legend: {
    show: boolean;
    data: string[];
    height: string;
    orient: string;
    lineStyle: string;
    textStyle: {
      color: string;
      fontFamily?: string;
    };
    bottom: string;
    left: string;
    top: string;
  };
  grid: Record<string, unknown>;
  xAxis: Record<string, unknown>;
  yAxis: Record<string, unknown>;
  series: Array<{
    name: string;
    data: Array<number>;
    type: string;
    lineStyle: {
      type: string;
    };
    symbol: string;
  }>;
};

type PerfStatContProps = {
  isShowAverage?: boolean;
};

const PerformanceStatisticContainer: FC<PerfStatContProps> = ({
  isShowAverage
}) => {
  const { t } = useTranslation('common', {
    keyPrefix: 'performanceStatistics'
  });
  const subtitle = t('day');
  const dataX = [
    t('Mon'),
    t('Tue'),
    t('Wed'),
    t('Thu'),
    t('Fri'),
    t('Sat'),
    t('Sun')
  ];
  let dataAPI: TDataAPI = [
    {
      name: t('Average Senior Auditor'),
      data: [0, 105, 101, 134, 90, 230, 210]
    },
    {
      name: t('Average Middle Auditor'),
      data: [55, 32, 125, 94, 145, 320, 280]
    },
    {
      name: t('Average Junior Auditor'),
      data: [150, 232, 201, 154, 190, 330, 180]
    },
    {
      name: 'Anna Anna',
      data: [320, 332, 301, 334, 390, 330, 320]
    }
  ];

  if (dataAPI.length > 40) {
    dataAPI = dataAPI.slice(0, 40);
  }

  const option: TOptionPerfStat = {
    animation: false,
    legend: {
      show: true,
      height: '23%',
      data: [],
      orient: 'vertical',
      lineStyle: 'none',
      textStyle: {
        color: 'inherit',
        fontFamily: 'sans-serif'
      },
      bottom: 'left',
      left: '2%',
      top: 'bottom'
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '25%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: dataX,
      label: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: 'dotted',
          color: 'grey'
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      name: `${t('Points')}/${subtitle}`,
      nameTextStyle: { color: '#263238', fontWeight: 'bold' }
    },
    series: []
  };

  const [dataValue, setDataValue] = useState<TDataAPI>(dataAPI);

  useEffect(() => {
    if (isShowAverage) {
      const newDataAPI = dataAPI.filter(
        ({ name }) => !name.includes(t('Average'))
      );
      setDataValue(newDataAPI);
    } else {
      setDataValue(dataAPI);
    }
  }, [isShowAverage]);

  if (!isEmpty(dataValue)) {
    dataValue.map(({ name, data }): void => {
      if (Array.isArray(data) && !isEmpty(data)) {
        option.series.push({
          name: name,
          data: data,
          type: 'line',
          lineStyle: {
            type: name.includes(t('Average')) ? 'dotted' : 'line'
          },
          symbol: 'none'
        });
        option.legend.data.push(name);
      }
    });
  }

  return <PerformanceStatistic option={Object.assign(option)} />;
};

export default PerformanceStatisticContainer;
