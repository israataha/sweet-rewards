import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React, { PropsWithChildren } from 'react';

export const Screen = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">{children}</ScrollView>
    </SafeAreaView>
  );
};
