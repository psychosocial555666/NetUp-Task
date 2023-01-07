import React from 'react';
import { connect } from 'react-redux';
import { CrossIcon, SearchSmallIcon } from '../../common/Icons/Icons';
import { dataSetter } from '../../redux/reducer';
import {
  ClearButton,
  SearchButton,
  SearchButtonText,
  SearchContainer,
  SearchInput,
  SearchInputLabel,
} from './Search.styles';
import { IProps, StateType } from './Search.types';

const mapStateToProps = (state: StateType) => ({
  focused: state.focused,
  searchInput: state.searchInput,
  loading: state.loading,
});

const Search: React.FC<IProps> = ({ focused, searchInput, loading }) => {
  const inputFocusHandler = () => dataSetter.setFocused(true);

  const inputBlurlurHandler = () => {
    if (searchInput === '') dataSetter.setFocused(false);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dataSetter.setSearchInput(e.target.value);
  };

  const clearButtonChangeHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dataSetter.setSearchInput('');
    dataSetter.setFiltered('');
    dataSetter.setFocused(false);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dataSetter.setFiltered(searchInput);
  };

  return (
    <SearchContainer focused={focused} onSubmit={submitHandler} action='POST'>
      <SearchInputLabel>
        <SearchInput
          placeholder='Search'
          onFocus={inputFocusHandler}
          onBlur={inputBlurlurHandler}
          onChange={inputChangeHandler}
          focused={focused}
          type='text'
          value={searchInput}
          disabled={loading}
        />
        <ClearButton type='reset' focused={focused && searchInput.length > 0} onClick={clearButtonChangeHandler}>
          <CrossIcon />
        </ClearButton>
      </SearchInputLabel>
      <SearchButton type='submit' disabled={loading}>
        <SearchButtonText>search</SearchButtonText>
        <SearchSmallIcon />
      </SearchButton>
    </SearchContainer>
  );
};

export default connect(mapStateToProps)(Search);
