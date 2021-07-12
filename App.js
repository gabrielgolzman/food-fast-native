import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RestaurantScreen from './src/screens/RestaurantScreen';
import SafeArea from './src/utility/SafeArea';

export default function App() {
   return (
      <SafeArea>
         <View style={styles.container}>
            <RestaurantScreen />
            <StatusBar style="auto" />
         </View>
      </SafeArea>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
