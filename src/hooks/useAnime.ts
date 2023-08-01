import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_ENDPOINT } from '@/constants';
import { apiClient } from '@/libs/network/httpClient';
import { IAnimeDetailResult, IAnimeSearchParams, IAnimeSearchResult } from '@/types/anime';

export const useGetAnimeList = (params: IAnimeSearchParams): UseQueryResult<IAnimeSearchResult, Error> => {
  const useQueryResult: UseQueryResult<IAnimeSearchResult, Error> = useQuery({
    queryKey: [API_ENDPOINT.ANIME_SEARCH, params],
    queryFn: () => apiClient.get<IAnimeSearchResult>(API_ENDPOINT.ANIME_SEARCH, { params }),
  });

  return useQueryResult;
};

export const useGetAnimeDetail = (animeId: string, enabled: boolean): UseQueryResult<IAnimeDetailResult, Error> => {
  const endpointAnimeDetail = API_ENDPOINT.ANIME_DETAIL.replace(':id', animeId);
  const useQueryResult: UseQueryResult<IAnimeDetailResult, Error> = useQuery({
    enabled,
    queryKey: [endpointAnimeDetail, animeId],
    queryFn: () => apiClient.get<IAnimeDetailResult>(endpointAnimeDetail),
  });

  return useQueryResult;
};
