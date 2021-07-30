import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { MenuList } from './MenuScreen.styles';

import ProductCard from '../../components/restaurant/ProductCard/ProductCard';
import Layout from '../../utility/Layout/Layout';
import { FadeInView } from '../../utility/animations/FadeAnimation';

const MenuScreen = ({ navigation }) => {
   let mock = require('../../../data/mock.json');
   return (
      <Layout nav={navigation}>
         <MenuList
            data={mock.menuOptions}
            renderItem={({ item }) => {
               return (
                  <TouchableNativeFeedback
                     onPress={() => {
                        navigation.navigate('product', { product: item });
                     }}
                     background={TouchableNativeFeedback.Ripple(
                        '#FFFFFF',
                        true
                     )}
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
      </Layout>
   );
};

export default MenuScreen;
