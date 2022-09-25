import { Box } from 'native-base';
import React, { FC } from 'react';

interface Props {
  url?: string;
}

export const Play: FC<Props> = () => {
  const url = 'https://yun.66dm.net/SBDM/JujutsuKaisen0.m3u8';

  return <Box>{url}</Box>;
};
