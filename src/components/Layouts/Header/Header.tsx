import React, { FC, PropsWithChildren } from 'react';
import { Box, Heading } from 'native-base';

interface Props extends PropsWithChildren {
  title?: string;
}

export const Header: FC<Props> = ({ children, title }) => {
  return <Box>{children || <Heading>{title}</Heading>}</Box>;
};
