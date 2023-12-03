import React from 'react';
import {Navigation} from './src/navigation';
import {State} from './src/state';

function App(): JSX.Element {
  return (
    <State>
      <Navigation />
    </State>
  );
}

export default App;
