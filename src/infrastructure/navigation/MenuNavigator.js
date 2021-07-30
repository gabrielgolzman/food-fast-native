import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../../screens/MenuScreen/MenuScreen';

const MenuNavigator = () => {
   const MenuStack = createStackNavigator();
   return (
      <MenuStack.Navigator>
         <MenuStack.Screen name="menu" component={MenuScreen} />
      </MenuStack.Navigator>
   );
};

export default MenuNavigator;
