import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AnimeCard from '@/components/AnimeCard';

describe('AnimeCard', () => {
  const anime = {
    mal_id: 49,
    url: 'https://myanimelist.net/anime/49/Aa_Megami-sama',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/11/71215.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/11/71215t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/11/71215l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/11/71215.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/11/71215t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/11/71215l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Aa! Megami-sama!',
      },
      {
        type: 'Synonym',
        title: 'Ah! My Goddess (OVA)',
      },
      {
        type: 'Japanese',
        title: 'ああっ女神さまっ',
      },
      {
        type: 'English',
        title: 'Oh! My Goddess',
      },
      {
        type: 'German',
        title: 'Oh! My Goddess',
      },
      {
        type: 'Spanish',
        title: 'Ah, Mi Diosa!',
      },
      {
        type: 'French',
        title: 'Ah! My Goddess',
      },
    ],
    title: 'Aa! Megami-sama!',
    title_english: 'Oh! My Goddess',
    title_japanese: 'ああっ女神さまっ',
    title_synonyms: ['Ah! My Goddess (OVA)'],
    type: 'OVA',
    source: 'Manga',
    episodes: 5,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1993-02-21T00:00:00+00:00',
      to: '1994-05-17T00:00:00+00:00',
      prop: {
        from: {
          day: 21,
          month: 2,
          year: 1993,
        },
        to: {
          day: 17,
          month: 5,
          year: 1994,
        },
      },
      string: 'Feb 21, 1993 to May 17, 1994',
    },
    duration: '30 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 7.29,
    scored_by: 26483,
    rank: 2626,
    popularity: 2866,
    members: 52854,
    favorites: 248,
    synopsis:
      "When college student Keiichi Morisato dials the wrong number while ordering for some food at his dormitory, he accidentally gets connected to the Goddess Hotline and a beautiful goddess named Belldandy appears out of a mirror in front of him. After getting kicked out of the dorm, Keiichi and Belldandy move to an old shrine and soon afterwards, Belldandy's sisters Urd and Skuld move in.",
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 23,
        type: 'anime',
        name: 'Bandai Visual',
        url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
      },
      {
        mal_id: 50,
        type: 'anime',
        name: 'KSS',
        url: 'https://myanimelist.net/anime/producer/50/KSS',
      },
      {
        mal_id: 144,
        type: 'anime',
        name: 'Pony Canyon',
        url: 'https://myanimelist.net/anime/producer/144/Pony_Canyon',
      },
      {
        mal_id: 145,
        type: 'anime',
        name: 'TBS',
        url: 'https://myanimelist.net/anime/producer/145/TBS',
      },
      {
        mal_id: 159,
        type: 'anime',
        name: 'Kodansha',
        url: 'https://myanimelist.net/anime/producer/159/Kodansha',
      },
      {
        mal_id: 213,
        type: 'anime',
        name: 'Half H.P Studio',
        url: 'https://myanimelist.net/anime/producer/213/Half_HP_Studio',
      },
      {
        mal_id: 1585,
        type: 'anime',
        name: 'Nichion',
        url: 'https://myanimelist.net/anime/producer/1585/Nichion',
      },
    ],
    licensors: [
      {
        mal_id: 310,
        type: 'anime',
        name: 'AnimEigo',
        url: 'https://myanimelist.net/anime/producer/310/AnimEigo',
      },
    ],
    studios: [
      {
        mal_id: 48,
        type: 'anime',
        name: 'AIC',
        url: 'https://myanimelist.net/anime/producer/48/AIC',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 22,
        type: 'anime',
        name: 'Romance',
        url: 'https://myanimelist.net/anime/genre/22/Romance',
      },
      {
        mal_id: 37,
        type: 'anime',
        name: 'Supernatural',
        url: 'https://myanimelist.net/anime/genre/37/Supernatural',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 42,
        type: 'anime',
        name: 'Seinen',
        url: 'https://myanimelist.net/anime/genre/42/Seinen',
      },
    ],
  };

  it('should render loading skeleton when isLoading is true', () => {
    render(<AnimeCard isLoading={true} />);

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('should render anime information when isLoading is false and anime data is provided', () => {
    render(<AnimeCard anime={anime} isLoading={false} />);

    expect(screen.getByAltText('Anime Poster')).toBeInTheDocument();
    expect(screen.getByText(anime.title)).toBeInTheDocument();
    expect(screen.getByText(anime.score)).toBeInTheDocument();
    expect(
      screen.getByText(`${anime.genres[0].name} / ${anime.genres[1].name} / ${anime.genres[2].name}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`${anime.episodes} Eps`)).toBeInTheDocument();
  });

  it('should call onClick when the anime card is clicked', () => {
    const mockOnClick = jest.fn();

    render(<AnimeCard anime={anime} isLoading={false} onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId('anime-card'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not render anything when isLoading is false but anime data is not provided', () => {
    render(<AnimeCard isLoading={false} />);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Anime Poster')).not.toBeInTheDocument();
    expect(screen.queryByText(anime.title)).not.toBeInTheDocument();
    expect(screen.queryByText(anime.score)).not.toBeInTheDocument();
    expect(
      screen.queryByText(`${anime.genres[0].name} / ${anime.genres[1].name} / ${anime.genres[2].name}`),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(`${anime.episodes} Eps`)).not.toBeInTheDocument();
  });
});
