import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ContentAuditorWidget from './ContentAuditorWidget';

describe('My Connected React-Redux Component', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(<ContentAuditorWidget />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders content-auditor-component', () => {
    render(<ContentAuditorWidget />);
    const widget = screen.getByTestId('widget');
    const content = screen.getByTestId('content');
    const contentBlock = screen.getByTestId('content-block');
    const contentHeader = screen.getByTestId('content-header');
    expect(widget).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(contentBlock).toBeInTheDocument();
    expect(contentHeader).toBeInTheDocument();
  });

  test('renders image block', () => {
    render(<ContentAuditorWidget />);
    const imageBlock = screen.getByTestId('image-block');
    const image = screen.getByTestId('image');
    expect(imageBlock).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('renders content row block 5 times', () => {
    render(<ContentAuditorWidget />);
    const container = screen.getAllByTestId('container');
    const label = screen.getAllByTestId('label');
    const text = screen.getAllByTestId('text');
    expect(container.length).toBe(5);
    expect(label.length).toBe(5);
    expect(text.length).toBe(5);
  });

  test('renders classes of components accordingly to layout', () => {
    render(<ContentAuditorWidget />);
    const widget = screen.getByTestId('widget');
    const content = screen.getByTestId('content');
    const contentBlock = screen.getByTestId('content-block');
    const contentHeader = screen.getByTestId('content-header');
    expect(widget).toHaveClass('widget');
    expect(content).toHaveClass('widget__content content');
    expect(contentBlock).toHaveClass('content__block');
    expect(contentHeader).toHaveClass('content__header');
  });

  test('image has alt text', () => {
    render(<ContentAuditorWidget />);
    const image = screen.getByTestId('image');
    expect(image).toHaveAttribute('alt');
  });
});
