/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Navigation } from 'react-native-navigation';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';
import Intro from '../screens/Intro';

import homeIcon from '../images/home-icon.png';
import profileIcon from '../images/user-icon.png';
import introIcon from '../images/intro-icon.png';

export const AuthStack = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
}, {
  headerMode: 'none',
});

export const IntroStack = StackNavigator({
  Intro: {
    screen: Intro,
  },
}, {
  headerMode: 'none',
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
    },
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
}, {
  headerMode: 'none',
});

const styles = {
  icon: {
    height: 30,
    width: 30,
  },
};

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={[styles.icon, { tintColor }]}
          source={homeIcon}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={[styles.icon, { tintColor }]}
          source={profileIcon}
        />
      ),
    },
  },
});

Navigation.registerComponent('screen.home', () => Home);
Navigation.registerComponent('screen.details', () => Details);
Navigation.registerComponent('screen.profile', () => Profile);
Navigation.registerComponent('screen.signin', () => SignIn);
Navigation.registerComponent('screen.intro', () => Intro);
