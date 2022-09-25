import { Button, Flex } from 'native-base';
import React, { FC } from 'react';

interface Props {
  list: GetVideoDataResponse['playList'][0]['list'];
  onClick?: (item: Props['list'][0]) => void;
}
export const VideoItems: FC<Props> = ({ list, onClick }) => {
  return (
    <Flex p={1} direction="row" flexWrap="wrap">
      {list.map(item => (
        <Button mx={1} mb={1.5} key={item.web} onPress={() => onClick?.(item)}>
          {item.name}
        </Button>
      ))}
    </Flex>
  );
};
