// Test Pattern: AAA (Arrange, Act, Assert)
// Arranging the tools
import { render, screen } from '@testing-library/react';
import App from './App'; // comp taken up for testing

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
