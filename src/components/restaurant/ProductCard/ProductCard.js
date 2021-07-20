import React from 'react';
import { Text, View } from 'react-native';

const ProductCard = ({ product }) => {
   console.log(product);
   return (
      <View>
         <Text>Product Card</Text>
         <Text>{product.optionName}</Text>
      </View>
   );
};

export default ProductCard;
