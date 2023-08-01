export interface IAnimeSearchResult {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: IAnime[];
}

export interface IAnime {
  mal_id: number;
  url: string;
  images: { [key: string]: IAnimeImage };
  trailer: IAnimeTrailer;
  approved: boolean;
  titles: IAnimeTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: IAnimeAired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: IAnimeBroadcast;
  producers: IAnimeGenre[];
  licensors: IAnimeGenre[];
  studios: IAnimeGenre[];
  genres: IAnimeGenre[];
  themes: IAnimeGenre[];
}

export interface IAnimeImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface IAnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: IAnimeTrailerImages;
}

export interface IAnimeTrailerImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface IAnimeTitle {
  type: string;
  title: string;
}

export interface IAnimeAired {
  from: Date;
  to: Date;
  prop: IAnimeProp;
  string: string;
}

export interface IAnimeProp {
  from: IAnimeFrom;
  to: IAnimeFrom;
}

export interface IAnimeFrom {
  day: number;
  month: number;
  year: number;
}

export interface IAnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface IAnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface IAnimeType {
  label: string;
  value: string;
}

export interface IAnimeRating {
  label: string;
  value: string;
}

export interface IAnimeStatus {
  label: string;
  value: string;
}

export interface IAnimeSearchParams {
  page: number;
  limit: number;
  q: string;
  type?: string;
  rating?: string;
  genres?: string;
}
