import { render, screen } from '@testing-library/react';
import App from './index';

test('renders Drink Finder h1', () => {
  render(<App />);
  const h1 = screen.getByText(/Drink Finder/i);
  expect(h1).toBeInTheDocument();
});
