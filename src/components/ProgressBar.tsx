import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

interface ProgressBarProps {
  /**
   * Progress value (between 0 and 1).
   */
  progress: number;
  /*
   * Levels to display under progress bar (optional)
   */
  tiers?: number[];
}

export const ProgressBar = (props: ProgressBarProps) => {
  const progress = props.progress;
  const tiers = props.tiers ?? [];

  const getWidth = (index: number) => {
    if (index === 0) {
      return 10;
    }
    if (index === tiers.length) {
      return ((450 - tiers[tiers.length - 1]) / 450) * 100;
    }
    return ((tiers[index] - tiers[index - 1]) / 450) * 100;
  };

  return (
    <View>
      <View accessible accessibilityRole="progressbar" accessibilityLabel="Points progress" style={styles.container}>
        <View accessibilityLabel="" style={[styles.bar, { width: `${progress * 100}%` }]} />
      </View>
      {tiers && (
        <View style={styles.tiers}>
          {tiers.map((tier, index) => {
            return (
              <Text key={tier} style={[styles.tier, { width: `${getWidth(index)}%` }]}>
                {tier}
              </Text>
            );
          })}
          <Text style={[styles.tier, { width: `${getWidth(tiers.length)}%` }]} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  bar: {
    height: 8,
    backgroundColor: colors.accentGreen,
    borderRadius: 10,
  },
  tiers: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: 3,
  },
  tier: {
    fontSize: 12,
    color: colors.neutral500,
    fontFamily: fonts.SodoSans.semibold,
    textAlign: 'right',
  },
});
