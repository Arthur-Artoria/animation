import { Box, Flex } from 'native-base';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { getPlayUrl, getVideoData } from '../../apis';
import { useAppRoute } from '../../navigation';
import { Tabs } from './components/Tabs';
import { VideoItems } from './components/VideoItems';
import { Item } from './type';

export const Video: FC = () => {
  const route = useAppRoute<Screens.Video>();
  const video = route.params.video;
  const [playList, setPlayList] = useState<GetVideoDataResponse['playList']>();
  const [list, setList] = useState<GetVideoDataResponse['playList'][0]['list']>(
    [],
  );

  useEffect(() => {
    (async () => {
      const { playList: _playList } = await getVideoData(video.id);
      setPlayList(_playList);
    })();
  }, [video.id]);

  const handelVideoClick = useCallback(async (videoItem: Item) => {
    const url = await getPlayUrl(videoItem.web);
    // http://www.xxmanmi.com/mp4.html?u=https%3A%2F%2Fyun.66dm.net%2FSBDM%2FJujutsuKaisen0.m3u8
    console.log(url);
  }, []);

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
