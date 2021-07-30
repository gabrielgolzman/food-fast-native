import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { MenuList } from './MenuScreen.styles';

import ProductCard from '../../components/restaurant/ProductCard/ProductCard';
import { FadeInView } from '../../utility/animations/FadeAnimation';

const MenuScreen = () => {
   let mock = require('../../../data/mock.json');
   return (
      <MenuList
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

export default MenuScreen;
