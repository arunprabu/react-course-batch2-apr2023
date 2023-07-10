// Test Pattern: AAA

// Arrange
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CompanyInfo from './CompanyInfo';

// TEST SUITE = group of related tests
describe('CompanyInfo', () => {
  // let's write the tests / test cases / test specs
  it('has Company Info text', () => {
    render(<CompanyInfo />);
    // using regExp pattern here
    const companyInfoText = screen.getByText(/company info/i); // i stands for case-insensitive
    expect(companyInfoText).toBeInTheDocument();
  });

  it('should have Cognizant as company name', () => {
    render(<CompanyInfo />);
    // screen.getByText('Company Name: Cognizant');

    const companyName = screen.getByTestId('companyName');
    // console.log(companyName.textContent);
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // Testing Props -- must in all places where you receive prop in capstone project
  it('receives foundedYear props and displays in JSX', () => {
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveTextContent('Founded Year: 2000');
  });

  // TODO: Testing Props -- headquarters = Teaneck, New Jersey, U.S
  // In browser I want to output to be 'Headquarters: Teaneck, New Jersey, U.S'

  // Testing inline CSS - must in at least one place in capstone project
  it('has Founded Year text in color #ff0000 -- inline styles', () => {
    render(<CompanyInfo foundedYear="2023" />);
    const foundedYear = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not color name
    expect(foundedYear).toHaveStyle('color: #ff0000');
  });

  // Testing External CSS
  // TODO: testing whether a button has css class 'btn-primary'
  // the button should have the text: JOIN COGNIZANT
  // use data-testid
  // you can also have multiple expectations

  // Testing to find out whether the input has the right placeholder
  it('has an input with Enter Your Country Name as placeholder', () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    expect(countryInput).toBeTruthy();
  });

  // Testing states and events -- must in all places in capstone project
  it('displays countryName USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    console.log(countryInput.value);
    expect(countryInput.value).toBe('USA');

    // creating mock event object
    const mockEvent = {
      target: {
        value: 'South Korea'
      }
    };

    // now checking whether the onChange event handler is working or not
    // as the comp is rendered in test runner, we can't use mouse or keyboard as input devices
    // so, let's trigger the event thru program
    fireEvent.change(countryInput, mockEvent);
    // finally let's check if the input element is showing the change
    expect(countryInput.value).toBe('South Korea');
    expect(screen.getByTestId('visitWebsite')).toHaveTextContent(
      'Please visit Cognizant South Korea website'
    );
  });

  // TODO: Testing states and events -- with a button

  // Snapshot Testing - must in at least one place in capstone project
  it('has right snapshot with all requirements completed', () => {
    // To take snapshot we need react-test-renderer  // npm i react-test-renderer -D
    // Taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    const snapshopInJson = renderer.create(<CompanyInfo foundedYear="2000" />).toJSON();
    // let's assert with toMatchSnapshot()
    expect(snapshopInJson).toMatchSnapshot();
  });
});
