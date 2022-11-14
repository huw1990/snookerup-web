import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Slider from './components/Home/Slider';
import HowItWorks from './components/Home/HowItWorks';

function App() {
  return (
    <Fragment>
      <Header/>
      <Slider/>
      <HowItWorks/>
    </Fragment>
  );
}

export default App;