import { Box, Heading, HStack, Image, VStack } from 'native-base';
import React, { FC, useCallback } from 'react';
import { Pressable, Text } from 'react-native';

interface DefaultVideoRowProps {
  video: GetNewResponseItem;
  onClick?: (video: GetNewResponseItem) => void;
}

export const DefaultVideoRow: FC<DefaultVideoRowProps> = ({
  video,
  onClick,
}) => {
  const { img, name, detail } = video;
  const handlePress = useCallback(() => {
    onClick?.(video);
  }, [onClick, video]);

  return (
    <Box>
      <Pressable onPress={handlePress}>
        <HStack space={2} py={2} width="full" alignItems="center">
          <Image source={{ uri: img }} width={60} height={60} alt={name} />
          <VStack flex={1}>
            <Heading size="md" isTruncated maxW="95%">
              {name}
            </Heading>
            <Text>{detail}</Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
  );
};
