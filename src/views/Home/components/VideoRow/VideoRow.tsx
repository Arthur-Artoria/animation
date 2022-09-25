import { Box, Heading, Text, VStack } from 'native-base';
import React, { FC, useCallback } from 'react';
import { Pressable } from 'react-native';

interface Props {
  video: SearchResponseItem;
  onClick?: (video: SearchResponseItem) => void;
}

export const VideoRow: FC<Props> = ({ video, onClick }) => {
  const handlePress = useCallback(() => {
    onClick?.(video);
  }, [onClick, video]);

  return (
    <Box>
      <Pressable onPress={handlePress}>
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'muted.50',
          }}
          borderColor="muted.800"
          py="2">
          <VStack>
            <Heading size="md">{video.name}</Heading>
            <Text>{video.detail}</Text>
          </VStack>
        </Box>
      </Pressable>
    </Box>
  );
};
