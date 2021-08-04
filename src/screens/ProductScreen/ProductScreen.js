import React from 'react';

import {
   Container,
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
   //const [currentQuantity, setCurrentQuantity] = useState(1);

   const { product } = route.params;
   const { idMenuOption, optionName, description, unitPrice, photo } = product;

   return (
      <Container>
         <ProductCoverPhoto
            alt={optionName}
            key={idMenuOption}
            source={{ uri: photo }}
         />
         <ProductInfoContainer>
            <ProductTitle>{optionName}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>${unitPrice}</ProductPrice>
         </ProductInfoContainer>
         <OptionsContainer>
            <QuantityCard elevation={5}>
               <QuantityContainer>
                  <ProductUnits>Unidades</ProductUnits>
                  <QuantityHandler currentQuantity />
               </QuantityContainer>
            </QuantityCard>
            <Clarifications placeholder="Aclaraciones" />
            <Button type="large" onPress={() => navigation.goBack()}>
               Agregar producto ${unitPrice}
            </Button>
         </OptionsContainer>
      </Container>
   );
};

export default ProductScreen;
