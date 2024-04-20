import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';
import { TabParamList } from './types';
import { Home, Scan, Locations } from '../screens';
import HomeIcon from '../../assets/icons/home.svg';
import LocationsIcon from '../../assets/icons/location.svg';
import AccountIcon from '../../assets/icons/account.svg';
import QrCodeIcon from '../../assets/icons/qr-code.svg';
import { colors } from '../theme/colors';
import { AccountNavigator } from './AccountNavigator';

const Tab = createBottomTabNavigator<TabParamList>();

const tabScreenOptions = (Icon: React.FC<SvgProps>, headerShown: boolean = true) => {
  return {
    options: {
      headerShown: headerShown,
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return <Icon fill={focused ? colors.accentGreen : colors.slate400} height={22} width={22} />;
      },
    },
  };
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { height: 100 },
        headerShadowVisible: true,
        tabBarInactiveTintColor: colors.slate400,
        tabBarActiveTintColor: colors.accentGreen,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', lineHeight: 14 },
        lazy: false,
      }}>
      <Tab.Screen name="Home" component={Home} {...tabScreenOptions(HomeIcon)} />
      <Tab.Screen name="Scan" component={Scan} {...tabScreenOptions(QrCodeIcon)} />
      <Tab.Screen name="Locations" component={Locations} {...tabScreenOptions(LocationsIcon)} />
      <Tab.Screen name="Account" component={AccountNavigator} {...tabScreenOptions(AccountIcon, false)} />
    </Tab.Navigator>
  );
};
