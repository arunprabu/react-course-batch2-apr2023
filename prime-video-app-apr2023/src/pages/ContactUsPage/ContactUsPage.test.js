// AAA
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';
import axios from 'axios';

jest.mock('axios');

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

  // negative test related to form validation
  it('has  submit button in disabled state when fullName is empty', () => {
    render(<ContactUsPage />);
    // finding fullName input
    const nameInput = screen.getByLabelText('Name');
    // finding submit button
    const submitBtn = screen.getByRole('button');

    const mockEventObject = {
      target: {
        value: ''
      }
    };

    fireEvent.change(nameInput, mockEventObject);
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // positive test  related to form validation
  it('has submit button in enabled state when fullName is NOT empty', () => {
    render(<ContactUsPage />);
    // finding fullName input
    const nameInput = screen.getByLabelText('Name');
    // finding submit button
    const submitBtn = screen.getByRole('button');

    const mockEventObject = {
      target: {
        value: 'arun'
      }
    };

    fireEvent.change(nameInput, mockEventObject);
    expect(submitBtn).not.toHaveAttribute('disabled');
  });

  // TODO: trigger the submit btn click and check whether success msg is displayed or not
  // render + fireEvent + mock resolve + assert
  // The following 2 ways can be implemented for mocking post. Preferred one is first approach
  it('has submit button and on click shows success message', async () => {
    render(
      <ContactUsPage />
    );

    // firing events
    const nameInput = screen.getByLabelText('Name');

    const mockEvenObject = {
      target: {
        value: 'abc'
      }
    };

    fireEvent.change(nameInput, mockEvenObject);

    // mock resolve
    const mockResponse = {
      data: {
        fullName: 'arun',
        email: 'a@b.com',
        phone: '12345',
        query: 'Would the test spec work?',
        isSubmitting: false,
        isSaved: false,
        isError: false
      }
    };

    axios.post.mockResolvedValue(mockResponse);

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    // assert
    expect(await screen.findByText('Saved Successfully!')).toBeInTheDocument();
  });

  it('submits the form with valid input', async () => {
    axios.post.mockResolvedValue({
      data: {
        fullName: 'a',
        email: 'a@b.com',
        phone: '12345',
        query: 'Would the test spec work?',
        isSubmitting: false,
        isSaved: false,
        isError: false
      }
    });

    render(
      <ContactUsPage />
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'a' } });

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'a@b.com' }
    });
    fireEvent.change(screen.getByLabelText('Phone'), {
      target: { value: 2727272727 }
    });

    fireEvent.change(screen.getByLabelText('Query'), {
      target: { value: 'Great App' }
    });
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() =>
      expect(screen.getByText(/Saved Successfully!/i)).toBeInTheDocument()
    );

    expect(axios.post).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
      {
        fullName: 'a',
        email: 'a@b.com',
        phone: '2727272727',
        query: 'Great App',
        isSubmitting: false,
        isSaved: false,
        isError: false
      }
    )
  });
});
