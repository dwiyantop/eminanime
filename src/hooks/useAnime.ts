import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_ENDPOINT } from '@/constants';
import { apiClient } from '@/libs/network/httpClient';
import { IAnimeSearchParams, IAnimeSearchResult } from '@/types/anime';

export const useGetAnimeList = (params: IAnimeSearchParams): UseQueryResult<IAnimeSearchResult, Error> => {
  const useQueryResult: UseQueryResult<IAnimeSearchResult, Error> = useQuery({
    queryKey: [API_ENDPOINT.SEARCH_ANIME, params],
    queryFn: () => apiClient.get<IAnimeSearchResult>(API_ENDPOINT.SEARCH_ANIME, { params }),
  });

  return useQueryResult;
};
