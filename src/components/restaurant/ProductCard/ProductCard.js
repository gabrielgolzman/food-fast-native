import React from 'react';

import {
   ProductCardWhole,
   ProductCardPhoto,
   ProductTitle,
   ProductDescription,
   ProductPrice,
   Info,
} from './ProductCard.styles';

const ProductCard = ({ product, noElevation }) => {
   const { idMenuOption, optionName, description, unitPrice, photo } = product;
   return (
      <ProductCardWhole elevation={!noElevation ? 5 : 0}>
         <ProductCardPhoto
            alt={optionName}
            key={idMenuOption}
            source={{ uri: photo }}
         />
         <Info>
            <ProductTitle>{optionName}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>${unitPrice}</ProductPrice>
         </Info>
      </ProductCardWhole>
   );
};

export default ProductCard;
