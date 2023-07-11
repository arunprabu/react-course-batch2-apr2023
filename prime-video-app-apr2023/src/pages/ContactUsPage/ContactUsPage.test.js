// AAA
import { render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';

// Test suite
describe('ContactUsPage', () => {
  it('has proper contact form with name, email, phone, query inputs and submit button', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email Address');
    const phoneInput = screen.getByLabelText('Phone');
    const queryInput = screen.getByLabelText('Query');
    // when I have one button this will work. for multiple buttons you have to use getAllByRole
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(queryInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });
});
