/*
  1. How to write test cases? TEST PATTERN: AAA (Arrange, Act, Assert)
  2. Where to write test cases? (here)
  3. How to test the app by tools? (tools are configured. try 'npm run test')
*/

// Arrange
// importing the necessary tools
// import { render, screen } from '@testing-library/react';
import App from './App'; // sample taken for testing

// test case a.k.a test spec --- or test
/*
test('App comp should have Success text', () => {
  // Act
  // writing the logic to test whether the app comp has Success text or not
  render(<App />); // rendering into a container -- document.body
  const successText = screen.getByText('Success!'); // DOM Querying
  // Assert (Must)
  expect(successText).toBeInTheDocument();
});

*/
// // 'it' is an alias of test
/*
it('should have Login text', () => {
  // Act
  render(<App />);
  const loginText = screen.getByText('Login');
  // Assert - (must)
  expect(loginText).toBeInTheDocument();
});
*/

it('has proper App Component', () => {
  // Act (optional)
  // Assert is mandatory for test spec
  expect(App).toBeTruthy();
});

/*
  * test, it, expect are from JEST
  * render, screen are from RTL.
  * toBeTruthy, toBeInTheDocument are matchers from jest-dom
*/
