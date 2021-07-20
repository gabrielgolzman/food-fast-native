import React from 'react';
import styled from 'styled-components/native';
import { View, FlatList, TouchableNativeFeedback } from 'react-native';

import ProductCard from '../components/restaurant/ProductCard/ProductCard';
import { FadeInView } from '../utility/animations/FadeAnimation';

const RestaurantList = styled(FlatList).attrs({
   contentContainerStyle: {
      padding: 16,
   },
})``;

const RestaurantScreen = () => {
   let mock = require('../../data/mock.json');
   return (
      <RestaurantList
         data={mock.menuOptions}
         renderItem={({ item }) => {
            return (
               <TouchableNativeFeedback
                  onPress={() => {
                     console.log(item.optionName + 'selected!');
                  }}
                  background={TouchableNativeFeedback.Ripple('#FFFFFF', true)}
               >
                  <View>
                     <FadeInView>
                        <ProductCard product={item} />
                     </FadeInView>
                  </View>
               </TouchableNativeFeedback>
            );
         }}
         keyExtractor={(item) => item.id}
      />
   );
};

export default RestaurantScreen;
