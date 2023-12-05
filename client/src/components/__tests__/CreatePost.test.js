import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import CreatePost from '../Mainpage/CreatePost';

test('should render CreatePostComponent', () => {
  render(<CreatePost />);
  const createPostComponent = screen.getByTestId('create-post');
  expect(createPostComponent).toBeInTheDocument();
});
