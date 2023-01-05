import React from 'react';
import { MainContainer } from './App.styles';
import BackgroundCarousel from './components/BackgroundCarousel/BackgroundCarousel';
import CardsSlider from './components/CardsSlider/CardsSlider';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import { dataSetter } from './redux/reducer';

const App: React.FC = () => {

  React.useEffect(() => {
    dataSetter.getData();
  }, []);

  return (
    <MainContainer>
      <BackgroundCarousel />
      <Header />
      <Search />
      <Title />
      <CardsSlider />
    </MainContainer>
  );
};

export default App;
