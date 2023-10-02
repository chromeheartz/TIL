import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // 버튼 여부 / 텍스트가 'Change to Blue'인지 확인
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })

  // 배경색이 빨간색인지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // 배경이 파란색인지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // 텍스트 변경
  expect(colorButton).toHaveTextContent('Change to Red');
});

// test('button turns blue when clicked', () => {
//   render(<App />)
//   const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
// });