import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PerformanceStatisticsTeamLead from './PerformanceStatisticsTeamLead';

describe('Render PerformanceStatisticsTeamLead Component', () => {
  it('Expect checkbox works', () => {
    const { getByRole } = render(<PerformanceStatisticsTeamLead />);
    const checkbox = getByRole('checkbox');
    const heading = getByRole('heading', { level: 2 });

    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(heading).toHaveTextContent(/Performance Statistics/i);
    expect(heading).toBeInTheDocument();
  });
});
