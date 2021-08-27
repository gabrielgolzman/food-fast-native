import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OrdersContextProvider } from '../../services/orders/orders.context';

import MainScreen from '../../screens/MainScreen/MainScreen';
import MenuScreen from '../../screens/MenuScreen/MenuScreen';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import HelpScreen from '../../screens/HelpScreen/HelpScreen';
import SummaryScreen from '../../screens/SummaryScreen/SummaryScreen';
import WaitingScreen from '../../screens/WaitingScreen/WaitingScreen';
import ReserveScreen from '../../screens/ReserveScreen/ReserveScreen';

const RestaurantNavigator = () => {
   const RestaurantStack = createStackNavigator();
   return (
      <OrdersContextProvider>
         <RestaurantStack.Navigator headerMode="none">
            <RestaurantStack.Screen name="main" component={MainScreen} />
            <RestaurantStack.Screen name="menu" component={MenuScreen} />
            <RestaurantStack.Screen name="reserve" component={ReserveScreen} />
            <RestaurantStack.Screen name="product" component={ProductScreen} />
            <RestaurantStack.Screen
               name="settings"
               component={SettingsScreen}
            />
            <RestaurantStack.Screen name="help" component={HelpScreen} />
            <RestaurantStack.Screen name="summary" component={SummaryScreen} />
            <RestaurantStack.Screen name="waiting" component={WaitingScreen} />
         </RestaurantStack.Navigator>
      </OrdersContextProvider>
   );
};

export default RestaurantNavigator;
