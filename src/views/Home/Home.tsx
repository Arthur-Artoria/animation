import { debounce } from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { getNew, searchVideoList } from '../../apis';
import { Header, View } from '../../components/Layouts';
import { Screens, useAppNavigation } from '../../navigation';
import { DefaultVideoList } from './components/DefaultVideoList';
import { SearchBox } from './components/SearchBox';
import { VideoList } from './components/VideoList';

export const Home: FC = () => {
  const navigation = useAppNavigation();
  const [defaultVideoList, setDefaultVideoList] = useState<GetNewResponse>([]);
  const [videoList, setVideoList] = useState<SearchResponse>([]);

  useEffect(() => {
    (async () => {
      const defaultVideoList = await getNew();
      setDefaultVideoList(defaultVideoList);
    })();
  }, []);

  const handleSearchChange = debounce(async (keyWord: string) => {
    const response = await searchVideoList(keyWord);
    setVideoList(response);
  }, 200);

  const handleSearchVideoClick = useCallback(
    (video: SearchResponseItem) => {
      navigation.navigate(Screens.Video, {
        video,
        title: video.name,
        origin: 'SEARCH',
      });
    },
    [navigation],
  );

  const handleHomeVideoClick = useCallback(
    (video: SearchResponseItem) => {
      navigation.navigate(Screens.Video, {
        video,
        title: video.name,
        origin: 'HOME',
      });
    },
    [navigation],
  );

  return (
    <View>
      <Header>
        <SearchBox onChangeText={handleSearchChange} />
      </Header>
      <DefaultVideoList
        videoList={defaultVideoList}
        onVideoClick={handleHomeVideoClick}
      />
      <VideoList videoList={videoList} onVideoClick={handleSearchVideoClick} />
    </View>
  );
};
