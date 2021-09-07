import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../../screens/account/AccountScreen/AccountScreen';
import LoginScreen from '../../screens/account/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/account/RegisterScreen/RegisterScreen';

const AccountNavigator = () => {
   const AccountStack = createStackNavigator();
   return (
      <AccountStack.Navigator headerMode="none">
         <AccountStack.Screen name="account" component={AccountScreen} />
         <AccountStack.Screen name="register" component={RegisterScreen} />
         <AccountStack.Screen name="login" component={LoginScreen} />
      </AccountStack.Navigator>
   );
};

export default AccountNavigator;
