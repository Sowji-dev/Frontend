import { render, screen } from '@testing-library/react';
import App from './App';

test.only('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/);
  expect(linkElement).toBeInTheDocument();
});
