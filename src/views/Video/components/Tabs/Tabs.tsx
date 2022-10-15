import { HStack, Radio } from 'native-base';
import React, { FC, useCallback, useEffect, useMemo } from 'react';

interface Props {
  playList: GetVideoDataResponse['playList'];
  onChange?: (list: GetVideoDataResponse['playList'][0]['list']) => void;
}

const renderRadios = (playList: Props['playList']) => {
  return playList.map(type => (
    <Radio key={type.value} value={String(type.value)} size="md" mx={1}>
      {type.name}
    </Radio>
  ));
};

export const Tabs: FC<Props> = ({ playList, onChange }) => {
  const defaultValue = useMemo(() => String(playList[0].value), [playList]);
  const handleChange = useCallback(
    (value: string) => {
      const video = playList.find(list => String(list.value) === value)!;
      onChange?.(video.list);
    },
    [onChange, playList],
  );
  useEffect(() => {
    handleChange(defaultValue);
  }, [defaultValue, handleChange, playList]);

  return (
    <Radio.Group
      defaultValue={defaultValue}
      name="playList"
      onChange={handleChange}>
      <HStack>{renderRadios(playList)}</HStack>
    </Radio.Group>
  );
};
