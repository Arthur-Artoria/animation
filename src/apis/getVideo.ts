import { XXMANMI_HOST } from './constants';
import { AppFetch } from './fetch';

const getHomeVideoData = async (
  videoId: string,
): Promise<GetVideoDataResponse> => {
  const playList = await AppFetch.get<GetVideoDataResponse['playList']>(
    `${XXMANMI_HOST}/yhdm/playList`,
    { params: { id: videoId } },
  );

  return { playList, name: '' };
};

const getSearchVideoData = (videoId: string) =>
  AppFetch.get<GetVideoDataResponse>('/videoData8', {
    params: { id: videoId },
  });

export const getVideoData = (
  videoId: string,
  origin: RootStackParamList['Video']['origin'],
) =>
  origin === 'HOME' ? getHomeVideoData(videoId) : getSearchVideoData(videoId);

export const getPlayUrl = (web: string) =>
  AppFetch.request(`/playUrl8?id=${web}`).then(res => res.text());
