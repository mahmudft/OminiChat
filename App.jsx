import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

function App() {
  // const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = 'light';

  return (
    <Provider store={store}>
      <Routes isLoggedIn={false} theme={theme} />
    </Provider>
  );
}

export default App;
