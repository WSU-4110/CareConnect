import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Feed from '../Mainpage/Feed';

test('should render FeedComponent', () => {
  render(<Feed />);
  const feedComponent = screen.getByTestId('feed');
  expect(feedComponent).toBeInTheDocument();
});
