import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../../screens/MenuScreen/MenuScreen';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import HelpScreen from '../../screens/HelpScreen/HelpScreen';

const MenuNavigator = () => {
   const MenuStack = createStackNavigator();
   return (
      <MenuStack.Navigator headerMode="none">
         <MenuStack.Screen name="menu" component={MenuScreen} />
         <MenuStack.Screen name="product" component={ProductScreen} />
         <MenuStack.Screen name="settings" component={SettingsScreen} />
         <MenuStack.Screen name="help" component={HelpScreen} />
      </MenuStack.Navigator>
   );
};

export default MenuNavigator;