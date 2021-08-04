import React, { useState } from 'react';

import {
   Container,
   HeaderContainer,
   ProductCoverPhoto,
   ProductInfoContainer,
   ProductTitle,
   ProductDescription,
   ProductPrice,
   ProductUnits,
   Clarifications,
   QuantityContainer,
   QuantityCard,
   OptionsContainer,
} from './ProductScreen.styles';

import Button from '../../components/ui/Button/Button';
import QuantityHandler from '../../components/restaurant/QuantityHandler/QuantityHandler';

const ProductScreen = ({ route, navigation }) => {
   const [currentQuantity, setCurrentQuantity] = useState(1);
   const [clarifications, setClarifications] = useState('');

   const { product } = route.params;
   const { idMenuOption, optionName, description, unitPrice, photo } = product;

   const minusPressedHandler = (quantity) => {
      setCurrentQuantity(quantity);
   };
   const plusPressedHandler = (quantity) => {
      setCurrentQuantity(quantity);
   };

   return (
      <Container>
         <HeaderContainer>
            <ProductCoverPhoto
               alt={optionName}
               key={idMenuOption}
               source={{ uri: photo }}
            />
            <Button type="goBack" onPress={() => navigation.goBack()} />
         </HeaderContainer>
         <ProductInfoContainer>
            <ProductTitle>{optionName}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>${unitPrice}</ProductPrice>
         </ProductInfoContainer>
         <OptionsContainer>
            <QuantityCard elevation={5}>
               <QuantityContainer>
                  <ProductUnits>Cantidad</ProductUnits>
                  <QuantityHandler
                     onMinusPressed={minusPressedHandler}
                     onPlusPressed={plusPressedHandler}
                     currentQuantity={currentQuantity}
                  />
               </QuantityContainer>
            </QuantityCard>
            <Clarifications
               placeholder="Aclaraciones"
               value={clarifications}
               onChangeText={(text) => setClarifications(text)}
            />

            <Button type="large" onPress={() => navigation.goBack()}>
               Agregar producto ${unitPrice * currentQuantity}
            </Button>
         </OptionsContainer>
      </Container>
   );
};

export default ProductScreen;
