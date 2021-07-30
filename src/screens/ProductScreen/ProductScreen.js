import React from 'react';
import { Text } from 'react-native';

import { Container } from './ProductScreen.styles';

const ProductScreen = ({ route }) => {
   const { product } = route.params;
   return (
      <Container>
         <Text>The Product Screen of {product.optionName}</Text>
      </Container>
   );
};

export default ProductScreen;
