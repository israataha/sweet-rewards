import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from './types';
import { TabNavigator } from './TabNavigator';

const RootStack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Tabs" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
