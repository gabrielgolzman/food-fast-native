import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const ProductCardWhole = styled(Card)`
   background-color: ${(props) => props.theme.colors.ui.bg};
   margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ProductCardPhoto = styled(Card.Cover)`
   padding: ${(props) => props.theme.space[2]};
   background-color: ${(props) => props.theme.colors.ui.bg};
`;

export const Info = styled.View`
   padding: ${(props) => props.theme.space[3]};
`;

export const ProductTitle = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.h5};
   margin-bottom: ${(props) => props.theme.space[0]};
`;

export const ProductDescription = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.caption};
   margin-bottom: ${(props) => props.theme.space[2]};
`;

export const ProductPrice = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
   font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SectionEnd = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: flex-end;
`;

export const Icon = styled.Image`
   width: 15px;
   height: 15px;
`;
