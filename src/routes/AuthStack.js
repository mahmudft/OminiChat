import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {WalkthroughScreen} from '../screens';
import EmailFormScreen from '../screens/Auth/EmailFormScreen';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

export const AuthStack = () => {
  const colors = useTheme().colors;

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: 'Mulish-Bold',
          fontSize: 18,
          lineHeight: 30,
          color: colors.text,
        },
        headerStyle: {
          backgroundColor: colors.themeColor,
          height: 50,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        options={{
          title: '',
        }}
        name="Walkthrough"
        component={WalkthroughScreen}
      />
      <Stack.Screen
        options={{
          title: 'Email Form',
        }}
        name="EmailForm"
        component={EmailFormScreen}
      />
    </Stack.Navigator>
  );
};
