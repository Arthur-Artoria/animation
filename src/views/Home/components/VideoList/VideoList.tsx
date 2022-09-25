import { FlatList } from 'native-base';
import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { VideoRow } from '../VideoRow';

interface Props {
  videoList: SearchResponse;
  onVideoClick?: (video: SearchResponseItem) => void;
}

export const VideoList: FC<Props> = ({ videoList, onVideoClick }) => {
  const renderItem = ({
    item: video,
  }: ListRenderItemInfo<SearchResponseItem>) => (
    <VideoRow onClick={onVideoClick} video={video} />
  );
  return <FlatList mt={2} data={videoList} renderItem={renderItem} />;
};
