import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { RestaurantList } from './RestaurantScreen.styles';

import ProductCard from '../../components/restaurant/ProductCard/ProductCard';
import { FadeInView } from '../../utility/animations/FadeAnimation';

const RestaurantScreen = () => {
   let mock = require('../../../data/mock.json');
   return (
      <RestaurantList
         data={mock.menuOptions}
         renderItem={({ item }) => {
            return (
               <TouchableNativeFeedback
                  onPress={() => {
                     console.log(item.optionName + ' selected!');
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
         keyExtractor={(item) => item.optionName}
      />
   );
};

export default RestaurantScreen;
