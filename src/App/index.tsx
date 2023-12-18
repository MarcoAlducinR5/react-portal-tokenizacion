import React from 'react';

import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { Tokenizacion } from '../Pages';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Tokenizacion />
    </>
  );
}

export default App;
