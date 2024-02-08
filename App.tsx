import React from 'react';
import {View} from 'react-native';
import ChatListPage from './src/pages/ChatPage.js';
import ChatRouter from './src/pages/ChatRouter.js';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <ChatListPage/> */}
      <ChatRouter />
    </NavigationContainer>
  );
}
export default App;
