import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './AuthStack';
import React from 'react';
import {StatusBar} from 'react-native';
import {Colors} from '../theme';
import {AppTab} from './AppTab';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = ({isLoggedIn, theme}) => {
  const colors = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <NavigationContainer theme={{...colors, theme}}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme === 'light' ? '#FFFFFF' : '#0F1828'}
      />

      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <RootStack.Screen
            name="App"
            component={AppTab}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
