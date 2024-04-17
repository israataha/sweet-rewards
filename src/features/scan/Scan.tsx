import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Screen } from '../../components';
import { colors } from '../../theme/colors';

export const Scan = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardShadow]}>
          <View style={styles.cardHeader} />
          <View style={styles.cardContent}>
            <Text style={styles.scan}>Scan to earn points</Text>
            <Text style={styles.earn}>Earn 1 pt per $1 </Text>
            <QRCode size={100} value="This is placeholder text" />
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
    color: colors.accentGreen,
    backgroundColor: colors.primaryGreen,
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
  scan: {
    fontSize: 20,
    fontWeight: '500',
  },
  earn: {
    borderColor: colors.gold,
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 10,
    fontWeight: '600',
    padding: 5,
    marginTop: 10,
    marginBottom: 18,
  },
});
