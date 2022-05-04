import { FC } from 'react';
import Grid from '@mui/material/Grid';
import {
  CriteriaWidgets,
  PerformanceStatisticsTeamLead,
  PerformanceStatisticsAuditors,
  TeamActivitiesPercentage,
  ActivitiesPercentage,
  TotalPoints,
  ContentAuditorWidget
} from './components/widgets';
import { Header } from './components/header';
import { Filter } from './components/filter';
import { DateFilter } from './components/dateFilter';

import './App.scss';

const App: FC = () => (
  <div className='app'>
    <Header />
    <main className='dashboard'>
      <Filter />
      <Grid container className='widgets'>
        <DateFilter />
        <ContentAuditorWidget />
        <PerformanceStatisticsAuditors />
        <PerformanceStatisticsTeamLead />
        <TeamActivitiesPercentage />
        <CriteriaWidgets />
        <TotalPoints />
        <ActivitiesPercentage />
      </Grid>
    </main>
  </div>
);

export default App;
