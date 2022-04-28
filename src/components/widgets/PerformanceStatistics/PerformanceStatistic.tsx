import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './PerformanceStatistics.scss';

type PerfStatProps = {
  option: object;
};

const PerformanceStatistic = React.memo<PerfStatProps>(({ option }) => (
  <ReactEcharts
    option={option}
    className='performance-statistics'
    notMerge={true}
  />
));

PerformanceStatistic.displayName = 'PerformanceStatistic';
export default PerformanceStatistic;
