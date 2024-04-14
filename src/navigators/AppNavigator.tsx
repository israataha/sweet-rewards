import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from './types';
import { TabNavigator } from './TabNavigator';

const RootStack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Tabs" component={TabNavigator} />
    </RootStack.Navigator>
  );
};
