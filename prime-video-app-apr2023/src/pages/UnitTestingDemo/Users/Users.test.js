import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';

// setting up mock for axios
// mocking a module with automocked version when needed
jest.mock('axios');

describe('Users', () => {
  /*
  The following is NOT RECOMMENDED. -- This is known as anti-pattern
  it('fetches userList via rest api call', async () => {
    render(<Users />);
    const nameElement = await screen.findByText(/Leanne Graham/);
    expect(nameElement).toBeInTheDocument();
  });

  3 Disadvantages  / Challenges in TESTING API calls with above approach
    1. Time Consuming
    2. Data inconsistency (no guarantee for sample data like Leanne Graham  to be available always)
    3. Availability of REST API (may be down or it may be in dev)

  The solution for the above problem is: Mocking REST API call
  Note: The above test spec should be removed
  */

  // POSTIVE TEST SPEC == Mocking Successful Response
  it('[MOCKING]: fetches userList via rest api call', async () => {
    // 1. prepare mock response
    const mockResponse = {
      data: [
        {
          id: 1,
          name: 'John Williams',
          email: 'j@k.com'
        },
        {
          id: 2,
          name: 'Steve Smith',
          email: 's@t.com'
        }
      ]
    };
    // 2. Resolve the http request with the above mock response
    // 2.1 setup mocks for axios (see before describe block)
    // 2.2 resolve the req
    axios.get.mockResolvedValue(mockResponse);

    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const nameElement = await screen.findByText('John Williams');
    expect(nameElement).toBeInTheDocument();
  });

  // NEGATIVE TEST SPEC == Mocking ERROR Response
});
