// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Screens {
  Home = 'Home',
  Video = 'Video',
}

type RootStackParamList = {
  Home: undefined;
  Play: undefined;
  Video: { video: SearchResponseItem; title: string };
};
