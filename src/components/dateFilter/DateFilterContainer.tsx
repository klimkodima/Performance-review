import { FC } from 'react';
import DateFilter from './DateFilter';
import './DateFilter.scss';

const DateFilterContainer: FC = () => (
  <div className='datefilter-container'>
    <h3 className='datefilter-container-header'>Auditor&apos;s Level</h3>
    <DateFilter />
  </div>
);

export default DateFilterContainer;
