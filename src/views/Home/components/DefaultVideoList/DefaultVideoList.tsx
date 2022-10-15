import { FlatList } from 'native-base';
import React, { FC } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultVideoRow } from '../DefaultVideoRow';

interface DefaultVideoListProps {
  videoList: GetNewResponse;
  onVideoClick?: (video: GetNewResponseItem) => void;
}

export const DefaultVideoList: FC<DefaultVideoListProps> = ({
  videoList,
  onVideoClick,
}) => {
  const renderItem = ({
    item: video,
  }: ListRenderItemInfo<GetNewResponseItem>) => (
    <DefaultVideoRow onClick={onVideoClick} video={video} />
  );

  return <FlatList mt={2} data={videoList} renderItem={renderItem} />;
};
