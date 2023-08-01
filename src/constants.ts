import { IAnimeRating, IAnimeStatus, IAnimeType } from '@/types/anime';

export const ANIME_TYPES: IAnimeType[] = [
  {
    label: 'TV',
    value: 'tv',
  },
  {
    label: 'Movie',
    value: 'movie',
  },
  {
    label: 'OVA',
    value: 'ova',
  },
  {
    label: 'Special',
    value: 'special',
  },
  {
    label: 'ONA',
    value: 'ona',
  },
  {
    label: 'Music',
    value: 'music',
  },
];

export const ANIME_RATING: IAnimeRating[] = [
  {
    label: 'All Ages',
    value: 'g',
  },
  {
    label: 'Children',
    value: 'pg',
  },
  {
    label: 'Teens 13 or older',
    value: 'pg13',
  },
];

export const ANIME_STATUS: IAnimeStatus[] = [
  {
    label: 'Airing',
    value: 'airing',
  },
  {
    label: 'Complete',
    value: 'complete',
  },
  {
    label: 'Upcoming',
    value: 'upcoming',
  },
];

export const API_ENDPOINT = {
  searchAnime: '/anime',
};
