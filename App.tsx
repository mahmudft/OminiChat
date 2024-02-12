import React from 'react'
import ChatRouter from './src/pages/ChatRouter.js';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance } from 'react-native';




function App(): React.JSX.Element {
  
  console.log(Appearance.getColorScheme())
  return (
    
    <NavigationContainer>
      {/* <ChatListPage/> */}
      <ChatRouter />
    </NavigationContainer>
     
  );
}

export default App;



