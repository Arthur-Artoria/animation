import { Box } from 'native-base';
import React, { FC, useMemo } from 'react';
import WebView from 'react-native-webview';
import { Screens, useAppRoute } from '../../navigation';
interface Props {
  url?: string;
}

export const Play: FC<Props> = () => {
  const route = useAppRoute<Screens.Play>();
  const url = route.params.url;
  const uri = useMemo(() => `http://www.xxmanmi.com/mp4.html?u=${url}`, [url]);

  return (
    <Box h="full">
      <WebView source={{ uri }} />
    </Box>
  );
};
