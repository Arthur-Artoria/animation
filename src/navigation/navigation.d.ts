type RootStackParamList = {
  Home: undefined;
  Play: { url: string };
  Video: {
    video: SearchResponseItem;
    title: string;
    origin: 'HOME' | 'SEARCH';
  };
};
