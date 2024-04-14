import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import { Rewards } from '../features/rewards/Rewards';
import { Locations } from '../features/locations/Locations';
import { More } from '../features/more/More';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Locations" component={Locations} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};
