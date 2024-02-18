import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

function App() {
  // const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = 'dark';

  return (
    <Provider store={store}>
      <Routes isLoggedIn={true} theme={theme} />
    </Provider>
  );
}

export default App;
