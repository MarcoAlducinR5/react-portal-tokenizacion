import React from 'react';

import { Header } from "../Components/Header/index.tsx";
import { Home } from "../Components/Home/index.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
