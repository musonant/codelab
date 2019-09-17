import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import LoadingScreen from './src/screens/AuthLoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { PRIMARY_COLOR } from './src/helpers/constants';
import ApolloWrapper from './src/screens/ApolloWrapper';

const AuthStack = createStackNavigator({ Login: LoginScreen });

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
        height: 0,
        opacity: 0,
      },
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
