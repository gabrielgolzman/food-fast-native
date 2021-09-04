import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OrdersContextProvider } from '../../services/orders/orders.context';
import { ReservationsContextProvider } from '../../services/reservation/reservations.context';

import MainScreen from '../../screens/MainScreen/MainScreen';
import MenuScreen from '../../screens/restaurant/MenuScreen/MenuScreen';
import ProductScreen from '../../screens/restaurant/ProductScreen/ProductScreen';
import SettingsScreen from '../../screens/restaurant/SettingsScreen/SettingsScreen';
import HelpScreen from '../../screens/restaurant/HelpScreen/HelpScreen';
import SummaryScreen from '../../screens/restaurant/SummaryScreen/SummaryScreen';
import WaitingScreen from '../../screens/restaurant/WaitingScreen/WaitingScreen';
import ReservationScreen from '../../screens/reservation/ReservationScreen/ReservationScreen';
import ReservationResumeScreen from '../../screens/reservation/ReservationResumeScreen/ReservationResumeScreen';

const RestaurantNavigator = () => {
   const RestaurantStack = createStackNavigator();
   return (
      <OrdersContextProvider>
         <ReservationsContextProvider>
            <RestaurantStack.Navigator headerMode="none">
               <RestaurantStack.Screen name="main" component={MainScreen} />
               <RestaurantStack.Screen name="menu" component={MenuScreen} />
               <RestaurantStack.Screen
                  name="reservation"
                  component={ReservationScreen}
               />
               <RestaurantStack.Screen
                  name="reservation-resume"
                  component={ReservationResumeScreen}
               />
               <RestaurantStack.Screen
                  name="product"
                  component={ProductScreen}
               />
               <RestaurantStack.Screen
                  name="settings"
                  component={SettingsScreen}
               />
               <RestaurantStack.Screen name="help" component={HelpScreen} />
               <RestaurantStack.Screen
                  name="summary"
                  component={SummaryScreen}
               />
               <RestaurantStack.Screen
                  name="waiting"
                  component={WaitingScreen}
               />
            </RestaurantStack.Navigator>
         </ReservationsContextProvider>
      </OrdersContextProvider>
   );
};

export default RestaurantNavigator;
