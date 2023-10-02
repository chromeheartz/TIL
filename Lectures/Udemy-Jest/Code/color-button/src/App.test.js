import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // 버튼 여부 / 텍스트가 'Change to Blue'인지 확인
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })

  // 배경색이 빨간색인지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});
// test('button has correct initial text', () => {});
test('button turns blue when clicked', () => {

});