import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Routes from './src/routes';
import {Colors} from './src/theme';

function App() {
  // const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = 'light';

  return (
    // <SafeAreaView style={{}}>
    //   <StatusBar
    //     barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
    //     backgroundColor={'red'}
    //   />
    <Routes isLoggedIn={false} theme={theme} />
    // </SafeAreaView>
  );
}

export default App;
