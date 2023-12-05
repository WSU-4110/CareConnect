import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import PostComponent from '../Mainpage/PostComponent';

test('should render PostComponent', () => {
  render(<PostComponent />);
  const postElement = screen.getByTestId('post-component');
  expect(postElement).toBeInTheDocument();
});
