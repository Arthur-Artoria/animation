import React, { FC } from 'react';
import { Input } from 'native-base';

interface Props {
  onChangeText?: (text: string) => void;
}

export const SearchBox: FC<Props> = ({ onChangeText }) => {
  return <Input placeholder="Search..." onChangeText={onChangeText} />;
};
