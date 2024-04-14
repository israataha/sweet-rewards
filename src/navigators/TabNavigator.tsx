import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';
import { TabParamList } from './types';
import { Rewards } from '../features/rewards/Rewards';
import { Earn } from '../features/earn/Earn';
import { Locations } from '../features/locations/Locations';
import { More } from '../features/more/More';
import RewardsIcon from '../../assets/icons/star.svg';
import LocationsIcon from '../../assets/icons/location.svg';
import MoreIcon from '../../assets/icons/ellipsis-horizontal.svg';
import QrCodeIcon from '../../assets/icons/qr-code.svg';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator<TabParamList>();

const tabScreenOptions = (Icon: React.FC<SvgProps>) => {
  return {
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return <Icon fill={focused ? colors.teal600 : colors.slate400} height={22} width={22} />;
      },
    },
  };
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.slate400,
        tabBarActiveTintColor: colors.teal600,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', lineHeight: 14 },
      }}>
      <Tab.Screen name="Rewards" component={Rewards} {...tabScreenOptions(RewardsIcon)} />
      <Tab.Screen name="Earn" component={Earn} {...tabScreenOptions(QrCodeIcon)} />
      <Tab.Screen name="Locations" component={Locations} {...tabScreenOptions(LocationsIcon)} />
      <Tab.Screen name="More" component={More} {...tabScreenOptions(MoreIcon)} />
    </Tab.Navigator>
  );
};
