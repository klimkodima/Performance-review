import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  test('Matches snapshot', () => {
    const tree = renderer
      .create(<Header onLogoutClick={() => true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
