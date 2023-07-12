// AAA
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);
    // fetching counterValue element
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');

    // finding the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click event on incrementBtn
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toBe('Counter Value: 4');
  });

  // TODO: test whether the comp has properly working increment button

  it('has counter with max value 10 upon increment', () => {
    render(<Counter />);
    // fetching counterValue element
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toBe('Counter Value: 0');

    // finding the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');
    // trigger the click event on incrementBtn
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }

    fireEvent.click(incrementBtn); // 11th time
    fireEvent.click(incrementBtn); // 12th time
    expect(counterValue.textContent).toBe('Counter Value: 10');
  });

  // TODO: has counter with min value 0 upon decrement
});
