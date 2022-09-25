import { AppFetch } from './fetch';

export const getVideoData = (videoId: string) =>
  AppFetch.get<GetVideoDataResponse>(`/videoData8?id=${videoId}`);

export const getPlayUrl = (web: string) =>
  AppFetch.request(`/playUrl8?id=${web}`).then(res => res.text());
