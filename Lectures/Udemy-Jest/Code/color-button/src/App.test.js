import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  // 버튼 여부 / 텍스트가 'Change to Blue'인지 확인
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  // 배경색이 빨간색인지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton);

  // 배경이 파란색인지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // 텍스트 변경
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  // 버튼이 활성화 상태로 시작하는지 ?
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // 체크박스가 체크가 안된 상태로 시작하는지 ?
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // change to MidnightBlue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
})

// Unit Testing Functions
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
})