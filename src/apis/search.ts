import { AppFetch } from './fetch';

export const searchVideoList = (word: string) => {
  return AppFetch.get<SearchResponse>(`/videoList8?word=${word}`);
};
