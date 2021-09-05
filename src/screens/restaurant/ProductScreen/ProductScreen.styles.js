import styled from 'styled-components/native';
import { Card, TextInput } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

export const Container = styled.View`
   flex: 1;
   justify-content: flex-start;
   background-color: ${(props) => props.theme.colors.ui.bg};
`;

export const HeaderContainer = styled.View`
   height: 35%;
   width: 100%;
`;

export const ProductCoverPhoto = styled(Card.Cover)`
   height: 100%;
   width: 100%;
`;

export const ProductInfoContainer = styled.View`
   padding: ${(props) => props.theme.space[2]};
`;

export const ProductTitle = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h4};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ProductDescription = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.body};
   padding-bottom: ${(props) => props.theme.space[1]};
`;

export const ProductPrice = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const OptionsContainer = styled.View`
   flex: 1;
   justify-content: space-around;
   align-items: center;
   padding: ${(props) => props.theme.space[3]};
`;

export const ProductUnits = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
`;

export const QuantityContainer = styled(Card.Content)`
   flex-direction: row;
   height: 100%;
   justify-content: space-between;
   align-items: center;
`;

export const QuantityCard = styled(Card)`
   width: 100%;
   height: 20%;
`;

export const Clarifications = styled(TextInput).attrs({
   selectionColor: colors.ui.primary,
   underlineColor: colors.ui.primary,
   outlineColor: colors.ui.primary,
   theme: {
      colors: {
         primary: colors.ui.primary,
      },
   },
})`
   height: 50px;
   background-color: ${colors.ui.bg};
   width: 100%;
`;
