import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Mainpost from '../Mainpage/Mainpost';

test('should render Mainpost', () => {
  render(<Mainpost />);
  const mainpost = screen.getByTestId('main-post');
  expect(mainpost).toBeInTheDocument();
});
