import { debounce } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { searchVideoList } from '../../apis';
import { Header, View } from '../../components/Layouts';
import { Screens, useAppNavigation } from '../../navigation';
import { SearchBox } from './components/SearchBox';
import { VideoList } from './components/VideoList';

export const Home: FC = () => {
  const navigation = useAppNavigation();
  const [videoList, setVideoList] = useState<SearchResponse>([]);

  const handleSearchChange = debounce(async (keyWord: string) => {
    const response = await searchVideoList(keyWord);
    setVideoList(response);
  }, 200);

  const handleVideoClick = useCallback(
    (video: SearchResponseItem) => {
      navigation.navigate(Screens.Video, { video, title: video.name });
    },
    [navigation],
  );

  return (
    <View>
      <Header>
        <SearchBox onChangeText={handleSearchChange} />
      </Header>

      <VideoList videoList={videoList} onVideoClick={handleVideoClick} />
    </View>
  );
};
