import React, { useContext, useEffect } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { MenuList } from './MenuScreen.styles';
import { OrdersContext } from '../../../services/orders/orders.context';

import ProductCard from '../../../components/restaurant/ProductCard/ProductCard';
import Layout from '../../../utility/Layout/Layout';
import { FadeInView } from '../../../utility/animations/FadeAnimation';
import Button from '../../../components/ui/Button/Button';

const MenuScreen = ({ navigation }) => {
   let mock = require('../../../../data/mock.json');

   const { orders, total, setOrderTotal } = useContext(OrdersContext);

   useEffect(() => {
      if (orders.length !== 0) {
         const amountArray = orders.map((order) => {
            return order.partialPrice;
         });
         const amount = amountArray.reduce((cur, val) => cur + val);
         setOrderTotal(amount);
      }
   }, [orders]);

   const orderButton = total ? (
      <Button onPress={() => navigation.navigate('summary')} type="sticky">
         Ver mi pedido ${+total.toFixed(2)}
      </Button>
   ) : null;

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
         {orderButton}
      </Layout>
   );
};

export default MenuScreen;
