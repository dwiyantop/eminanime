import { fireEvent, render, screen } from '@testing-library/react';
import AdvanceSearch from '@/components/AdvancedSearch';

const mockOnAnimeRatingChange = jest.fn();
const mockOnAnimeTypeChange = jest.fn();
const mockOnAnimeStatusChange = jest.fn();
const mockOnClearAllFilter = jest.fn();

describe('AdvanceSearch', () => {
  beforeEach(() => {
    render(
      <AdvanceSearch
        animeRating={null}
        animeStatus={null}
        animeType={null}
        onAnimeRatingChange={mockOnAnimeRatingChange}
        onAnimeStatusChange={mockOnAnimeStatusChange}
        onAnimeTypeChange={mockOnAnimeTypeChange}
        onClearAllFilter={mockOnClearAllFilter}
      />,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Advanced Search')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1); // Number of buttons based on the available "Clear All" button
  });

  it('should handle filter anime type change', () => {
    const checkbox = screen.getByLabelText('TV');

    fireEvent.click(checkbox);

    expect(mockOnAnimeTypeChange).toHaveBeenCalledWith('tv');
  });

  it('should handle filter anime rating change', () => {
    const checkbox = screen.getByLabelText('Teens 13 or older');

    fireEvent.click(checkbox);

    expect(mockOnAnimeRatingChange).toHaveBeenCalledWith('pg13');
  });

  it('should handle filter anime status change', () => {
    const checkbox = screen.getByLabelText('Complete');

    fireEvent.click(checkbox);

    expect(mockOnAnimeStatusChange).toHaveBeenCalledWith('complete');
  });

  it('should clear all filters when clear all button is clicked', () => {
    const clearAllButton = screen.getByText('Clear All');

    fireEvent.click(clearAllButton);

    expect(mockOnAnimeTypeChange).toHaveBeenCalledWith(null);
    expect(mockOnAnimeRatingChange).toHaveBeenCalledWith(null);
    expect(mockOnAnimeStatusChange).toHaveBeenCalledWith(null);
    expect(mockOnClearAllFilter).toHaveBeenCalled();
  });
});
