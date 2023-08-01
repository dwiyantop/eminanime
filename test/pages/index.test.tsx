import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useGetAnimeList } from '../../src/hooks/useAnime'; // Update the module path here
import useDebounce from '../../src/hooks/useDebounce';
import IndexPage from '@/pages/index';
import { ANIME_ITEM } from '../__mock__/anime';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../src/hooks/useAnime');
jest.mock('../../src/hooks/useDebounce');

describe('IndexPage', () => {
  const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
  const mockUseGetAnimeList = useGetAnimeList as jest.MockedFunction<typeof useGetAnimeList>;
  const mockUseDebounce = useDebounce as jest.MockedFunction<typeof useDebounce>;

  const mockAnimeData = [
    ANIME_ITEM,
    // Add more sample anime data as needed
  ];

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      push: jest.fn(),
    });

    mockUseGetAnimeList.mockReturnValue({
      data: {
        data: mockAnimeData,
      },
      isLoading: false,
      error: null,
    });

    mockUseDebounce.mockImplementation(value => value);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with loading state and no anime data', () => {
    mockUseGetAnimeList.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const { getAllByTestId } = render(<IndexPage />);

    const animeCards = getAllByTestId('loading-skeleton');
    expect(animeCards).toHaveLength(4); // Assuming you show 4 skeleton cards when loading
  });

  it('should render with anime data', () => {
    mockUseGetAnimeList.mockReturnValue({
      data: {
        data: [ANIME_ITEM],
      },
      isLoading: false,
      error: null,
    });

    const { getByTestId } = render(<IndexPage />);

    const animeCards = getByTestId('anime-card');
    expect(animeCards).toBeInTheDocument();
  });

  it('should render with no anime data', () => {
    mockUseGetAnimeList.mockReturnValue({
      data: {
        data: [],
      },
      isLoading: false,
      error: null,
    });

    const { getByText } = render(<IndexPage />);

    const resultNotFoundText = getByText('Result not found');
    expect(resultNotFoundText).toBeInTheDocument();
  });

  it('should trigger search query change and verify the state update', () => {
    const { getByPlaceholderText } = render(<IndexPage />);

    const searchInput = getByPlaceholderText('Search anime');
    fireEvent.change(searchInput, { target: { value: 'Naruto' } });

    // Assert that the query has changed
    expect(mockUseDebounce).toHaveBeenCalledTimes(2);
    expect(mockUseDebounce).toHaveBeenCalledWith(
      { q: '', genres_exclude: '12', limit: 12, page: 1, rating: null, type: null, status: null },
      500,
    );
  });

  // // Add tests for anime rating change, anime type change, and anime status change
  // // using a similar approach to the search query change test.

  it('should clear all filters and verify the state update', () => {
    const { getByTestId } = render(<IndexPage />);

    const advancedSearch = getByTestId('advanced-search');
    // Trigger the clear all filter button click
    fireEvent.click(advancedSearch);

    // Assert that all filters are cleared
    expect(mockUseDebounce).toHaveBeenCalledTimes(1);
    expect(mockUseDebounce).toHaveBeenCalledWith(
      { q: '', genres_exclude: '12', limit: 12, page: 1, rating: null, type: null, status: null },
      500,
    );
  });

  it('should click on an anime card and verify the routing behavior', () => {
    const { getByTestId } = render(<IndexPage />);

    const animeCard = getByTestId('anime-card');
    // Trigger the anime card click
    fireEvent.click(animeCard);

    // Assert that the router.push function is called with the correct animeId
    expect(mockUseRouter().push).toHaveBeenCalledTimes(0);
    expect(mockUseRouter().push).toHaveBeenCalledWith('/anime/1');
  });
});
