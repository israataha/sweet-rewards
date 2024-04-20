import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Account, History, Profile } from '../screens/account';
import { AccountParamList } from './types';

const AccountStack = createStackNavigator<AccountParamList>();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="AccountHome"
      screenOptions={{
        headerStyle: { height: 100 },
        headerShadowVisible: true,
      }}>
      <AccountStack.Screen name="AccountHome" component={Account} options={{ headerTitle: 'Account' }} />
      <AccountStack.Screen name="Profile" component={Profile} />
      <AccountStack.Screen name="History" component={History} />
      {/* other screens */}
    </AccountStack.Navigator>
  );
};
