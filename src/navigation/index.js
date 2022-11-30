import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationController} from './NavigationController';
import Home from '../screens/home';
import Detail from '../screens/detail';

const Stack = createNativeStackNavigator();

export const RoutesName = {
  Home: 'Home',
  Detail: 'Detail',
};

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={NavigationController.navigationRef}>
      <Stack.Navigator
        initialRouteName={RoutesName.Home}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          key={RoutesName.Home}
          name={RoutesName.Home}
          component={Home}
        />

        <Stack.Screen
          key={RoutesName.Detail}
          name={RoutesName.Detail}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
