import React from 'react';

import { Container } from './ProductScreen.styles';

import ProductCard from '../../components/restaurant/ProductCard/ProductCard';

const ProductScreen = ({ route }) => {
   const { product } = route.params;
   return (
      <Container>
         <ProductCard noElevation={true} product={product} />
      </Container>
   );
};

export default ProductScreen;
