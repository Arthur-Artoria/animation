import { RouteProp } from '@react-navigation/native';

interface Props {
  route: RouteProp<RootStackParamList>;
}
export const setTitle = ({ route }: Props) => ({ title: route.params?.title });
