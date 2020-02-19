import React, { FC } from 'react';
import { Item, Input, Icon, Button, Text } from 'native-base';
import { SItem } from './SSearchBar';

interface SearchBarProps {
  handleChange: Function;
  handleSearch: Function;
  value: string;
  disabled: boolean;
}

const SearchBar: FC<SearchBarProps> = ({
  handleChange,
  handleSearch,
  ...props
}) => {
  const { value = '', disabled } = props;

  return (
    <>
      <Item>
        <Icon name="ios-search" />
        <Input
          value={value}
          onChangeText={text => handleChange(text)}
          placeholder="City"
        />
        <Icon name="ios-cloud-outline" />
      </Item>
      <SItem>
        <Button
          disabled={disabled || value === ''}
          transparent
          onPress={() => handleSearch(value)}>
          <Text>Search</Text>
        </Button>
      </SItem>
    </>
  );
};

export default SearchBar;
