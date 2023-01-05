import React from 'react';
import { CrossIcon, SearchSmallIcon } from '../../common/Icons/Icons';
import {
  ClearButton,
  SearchButton,
  SearchButtonText,
  SearchContainer,
  SearchInput,
  SearchInputLabel,
} from './Search.styles';

const Search: React.FC = () => {
  const [focused, setFocused] = React.useState(false);
  const [inputString, setInputString] = React.useState('');

  const inputFocusHandler = () => setFocused(true);

  const inputBlurlurHandler = () => {
    if (inputString === '') setFocused(false);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const clearButtonChangeHandler = () => {
    setInputString('');
    setFocused(false);
  };

  return (
    <SearchContainer focused={focused}>
      <SearchInputLabel>
        <SearchInput
          placeholder='Search'
          onFocus={inputFocusHandler}
          onBlur={inputBlurlurHandler}
          onChange={inputChangeHandler}
          focused={focused}
          value={inputString}
        />
        <ClearButton focused={focused && inputString.length > 0} onClick={clearButtonChangeHandler} >
          <CrossIcon />
        </ClearButton>
      </SearchInputLabel>
      <SearchButton>
        <SearchButtonText>search</SearchButtonText>
        <SearchSmallIcon />
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
