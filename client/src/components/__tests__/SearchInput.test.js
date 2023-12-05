import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { SearchInput } from '../Navbar/NavbarComponents';

test('should render SearchInput', () => {
  render(<SearchInput />);
  const searchInput = screen.getByTestId('searchInput');
  expect(searchInput).toBeInTheDocument();
});
