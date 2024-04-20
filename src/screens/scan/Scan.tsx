import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Star from '../../../assets/icons/star.svg';
import { Screen } from '../../components';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/typography';

export const Scan = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardShadow]}>
          <View style={styles.cardHeader}>
            <Star height={100} fill={colors.gold} style={styles.star} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.scan}>Scan to earn points</Text>
            <Text style={styles.earn}> Earn 1 pt per $1 </Text>
            <View accessibilityLabel="QR Code">
              <QRCode size={100} value="This is placeholder text" />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 30,
    width: '80%',
    marginTop: 10,
  },
  cardShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardHeader: {
    backgroundColor: colors.houseGreen,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 150,
    width: '100%',
  },
  cardContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 250,
    width: '100%',
    paddingVertical: 30,
  },
  star: {
    height: 100,
    marginTop: 25,
  },
  scan: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 20,
  },
  earn: {
    borderColor: colors.gold,
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 10,
    padding: 4,
    marginTop: 10,
    marginBottom: 18,
  },
});
