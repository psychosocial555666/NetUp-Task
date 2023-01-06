import React from 'react';
import { connect } from 'react-redux';
import { MainContainer } from './App.styles';
import { IProps, StateType } from './App.types';
import BackgroundCarousel from './components/BackgroundCarousel/BackgroundCarousel';
import CardsSlider from './components/CardsSlider/CardsSlider';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Total from './components/Total/Total';
import Title from './components/Title/Title';
import { dataSetter } from './redux/reducer';

const mapStateToProps = (state: StateType) => ({
  focused: state.focused,
  searchInput: state.searchInput,
  filtered: state.filtered,
});

const App: React.FC<IProps> = ({focused, filtered}) => {
  React.useEffect(() => {
    dataSetter.getData();
  }, []);

  return (
    <MainContainer>
      <BackgroundCarousel />
      <Header />
      <Search />
      {!focused && <Title />}
      {filtered.length > 0 && <Total length={filtered.length}/>}
      {(!focused || filtered.length > 0) && <CardsSlider />}
    </MainContainer>
  );
};

export default connect(mapStateToProps)(App);
