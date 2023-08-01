import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('should render with the provided search query', () => {
    const searchQuery = 'Naruto';

    // Render the component with the provided search query
    const { getByPlaceholderText } = render(<SearchBar searchQuery={searchQuery} />);

    // Verify that the input element contains the correct search query
    const inputElement = getByPlaceholderText('Search anime');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(searchQuery);
  });

  it('should call onQueryChange when the input value is changed', () => {
    const mockOnQueryChange = jest.fn();
    const searchQuery = 'One Piece';

    const { getByPlaceholderText } = render(<SearchBar onQueryChange={mockOnQueryChange} searchQuery="" />);

    const inputElement = getByPlaceholderText('Search anime');
    fireEvent.change(inputElement, { target: { value: searchQuery } });

    expect(mockOnQueryChange).toHaveBeenCalledTimes(1);
    expect(mockOnQueryChange).toHaveBeenCalledWith(searchQuery);
  });

  it('should not call onQueryChange when the input value is changed and onQueryChange prop is not provided', () => {
    const searchQuery = 'Dragon Ball';

    const { getByPlaceholderText } = render(<SearchBar searchQuery={searchQuery} />);

    const inputElement = getByPlaceholderText('Search anime');
    fireEvent.change(inputElement, { target: { value: searchQuery } });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(searchQuery);
  });
});
