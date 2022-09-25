import { Box } from 'native-base';
import React, { FC, PropsWithChildren } from 'react';

export const View: FC<PropsWithChildren> = ({ children }) => {
  return <Box p={2}>{children}</Box>;
};
