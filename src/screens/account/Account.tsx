import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Button, Screen } from '../../components';
import Chevron from '../../../assets/icons/chevron-forward.svg';
import Help from '../../../assets/icons/help-buoy-outline.svg';
import Lock from '../../../assets/icons/lock.svg';
import Terms from '../../../assets/icons/newspaper-outline.svg';
import { fonts } from '../../theme/typography';
import { AccountScreenProps } from '../../navigators/types';
import { colors } from '../../theme/colors';

export const Account = ({ navigation }: AccountScreenProps<'AccountHome'>) => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.name}>Israa Taha</Text>
          <Text style={styles.email}>israataha@gmail.com</Text>
        </View>
        <View>
          <Text style={styles.header}>Profile</Text>
          <Pressable
            style={styles.subsection}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Text style={styles.item}>Personal info</Text>
            <Chevron height={15} width={15} color={colors.gray800} />
          </Pressable>
          <Pressable
            style={styles.subsection}
            onPress={() => {
              navigation.navigate('History');
            }}>
            <Text style={styles.item}>Transaction history</Text>
            <Chevron height={15} width={15} color={colors.gray800} />
          </Pressable>
          <Text style={styles.header}>Security</Text>
          <Pressable style={styles.subsection}>
            <Text style={styles.item}>Biometric Unlock</Text>
          </Pressable>
          <Text style={styles.header}>Help & policies</Text>
          <Pressable style={styles.subsection}>
            <Text style={styles.item}>Help</Text>
            <Help height={15} width={15} color={colors.gray800} />
          </Pressable>
          <Pressable style={styles.subsection}>
            <Text style={styles.item}>Terms & Conditions</Text>
            <Terms height={15} width={15} color={colors.gray800} />
          </Pressable>
          <Pressable style={styles.subsection}>
            <Text style={styles.item}>Privacy Notice</Text>
            <Lock height={15} width={15} color={colors.gray800} />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Sign out" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  profile: {
    paddingVertical: 20,
  },
  name: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 19,
  },
  email: {
    color: 'grey',
    fontFamily: fonts.SodoSans.regular,
    fontSize: 12,
  },
  header: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 14,
    paddingTop: 15,
  },
  subsection: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 12,
  },
  buttonContainer: {
    paddingTop: 15,
  },
});
