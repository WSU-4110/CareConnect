import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import UsersList from '../Navbar/UsersList';

test('should render UsersList', () => {
  render(<UsersList />);
  const usersList = screen.getByTestId('users-list');
  expect(usersList).toBeInTheDocument();
});
