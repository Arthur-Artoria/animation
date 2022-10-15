import { Box, Flex } from 'native-base';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { getPlayUrl, getVideoData } from '../../apis';
import { Screens, useAppRoute } from '../../navigation';
import { Tabs } from './components/Tabs';
import { VideoItems } from './components/VideoItems';
import { Item } from './type';

export const Video: FC = () => {
  const route = useAppRoute<Screens.Video>();
  const { video, origin } = route.params;
  const [playList, setPlayList] = useState<GetVideoDataResponse['playList']>();
  const [list, setList] = useState<GetVideoDataResponse['playList'][0]['list']>(
    [],
  );

  useEffect(() => {
    (async () => {
      const { playList } = await getVideoData(video.id, origin);
      setPlayList(playList);
    })();
  }, [origin, video.id]);

  const openUrl = useCallback(async (videoUrl: string) => {
    const url = `http://www.xxmanmi.com/mp4.html?u=${encodeURI(videoUrl)}`;
    await Linking.openURL(url);
  }, []);

  const handelVideoClick = useCallback(
    async ({ web }: Item) => {
      if (web.startsWith('http')) {
        return openUrl(web);
      }
      const url = await getPlayUrl(web);
      openUrl(url);
    },
    [openUrl],
  );

  if (!playList) {
    return <Box>Loading...</Box>;
  }

  if (playList.length === 0) {
    return <Box>暂无资源</Box>;
  }

  return (
    <Box>
      <Flex h="full" direction="column">
        <Tabs playList={playList} onChange={setList} />
        <VideoItems list={list} onClick={handelVideoClick} />
      </Flex>
    </Box>
  );
};
