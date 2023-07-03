// Test Pattern: AAA

// Arrange
import { render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';

// let's write the tests / test cases / test specs
it('has Company Info text', () => {
  render(<CompanyInfo />);
  // using regExp pattern here
  const companyInfoText = screen.getByText(/company info/i); // i stands for case-insensitive
  expect(companyInfoText).toBeInTheDocument();
});
