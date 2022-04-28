import { FC } from 'react';
import ReactEcharts from 'echarts-for-react';

import { IPieOption } from '../types';

type PieProps = {
  pieData: IPieOption;
};

const Pie: FC<PieProps> = ({ pieData }) => (
  <ReactEcharts
    data-testid='Pie'
    style={{ height: '480px' }}
    option={pieData}
    className='pie-chart'
    lazyUpdate={true}
  />
);
export default Pie;
