import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Button, Screen } from '../../components';
import Star from '../../../assets/icons/star.svg';
import ChevronUp from '../../../assets/icons/chevron-up.svg';
import ChevronDown from '../../../assets/icons/chevron-down.svg';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/typography';
import { ProgressBar } from '../../components/ProgressBar';

const REWARD_OPTIONS = [
  { points: 25, description: 'Customize your drink (espresso shot, nondairy milk, syrup and more)' },
  { points: 100, description: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more' },
  { points: 200, description: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast' },
  { points: 300, description: 'Sandwich, protein box or at-home coffee' },
  { points: 400, description: 'Select merchandise' },
];

export const getProgress = (currentPoints: number, maxPoints: number) => {
  const progress = currentPoints / maxPoints;
  if (progress < 0 || !isFinite(progress)) {
    return 0;
  }
  return progress > 1 ? 1 : progress;
};

export const Home = () => {
  const [showRewardsOptions, setShowRewardsOptions] = useState(false);
  const rewardsTiers = [25, 100, 200, 300, 400];
  const maxBalance = 450;
  const pointsBalance = 150;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.temp}>
          <View>
            <View style={styles.balance}>
              <Text style={styles.points}>{pointsBalance}</Text>
              <Star height={16} width={16} style={styles.star} />
            </View>
            <Text style={styles.star_balance}>Star balance</Text>
          </View>
          <View>
            <Pressable style={styles.rewards_options} onPress={() => setShowRewardsOptions(!showRewardsOptions)}>
              <Text style={styles.rewards_options_text}>Rewards options</Text>
              {showRewardsOptions ? (
                <ChevronUp height={15} width={15} color={colors.slate400} />
              ) : (
                <ChevronDown height={15} width={15} color={colors.slate400} />
              )}
            </Pressable>
          </View>
        </View>
        <ProgressBar progress={getProgress(pointsBalance, maxBalance)} tiers={rewardsTiers} />
        {showRewardsOptions && (
          <View style={styles.options}>
            <Text style={styles.options_title}>Rewards you can get with points</Text>
            {REWARD_OPTIONS.map((option, index) => {
              return (
                <View key={index} style={styles.tier}>
                  <View style={styles.tier_points_container}>
                    <Text style={styles.tier_points}>{option.points}</Text>
                    <Star height={8} width={8} style={styles.tier_star} />
                  </View>
                  <Text style={styles.tier_description}>{option.description}</Text>
                </View>
              );
            })}
          </View>
        )}
        <View style={styles.buttons}>
          <Button text="Details" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  temp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balance: {
    flexDirection: 'row',
  },
  points: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 28,
  },
  star: {
    marginTop: 12,
  },
  star_balance: {
    fontSize: 11,
    marginBottom: 10,
  },
  rewards_options: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rewards_options_text: {
    fontFamily: fonts.SodoSans.regular,
    fontSize: 11,
    marginRight: 6,
  },
  options_title: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 15,
    padding: 10,
  },
  options: {
    backgroundColor: colors.neutral200,
    borderRadius: 10,
    marginVertical: 10,
  },
  tier: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
    marginLeft: 10,
    width: 'auto',
  },
  tier_points_container: {
    flexDirection: 'row',
    marginHorizontal: 8,
    justifyContent: 'flex-end',
    width: '10%',
  },
  tier_points: {
    fontFamily: fonts.SodoSans.semibold,
    fontSize: 11,
  },
  tier_star: {
    marginTop: 3,
  },
  tier_description: {
    fontFamily: fonts.SodoSans.regular,
    fontSize: 11,
    width: '80%',
  },
  buttons: {
    marginTop: 20,
  },
});
