import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * Specifying undefined means that the route doesn't have params.
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Login: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Earn: undefined;
  Rewards: undefined;
  Locations: undefined;
  More: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList, T>;

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;
