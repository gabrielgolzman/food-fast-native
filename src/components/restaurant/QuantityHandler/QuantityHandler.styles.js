import styled from 'styled-components/native';
import { IconButton } from 'react-native-paper';

export const MinusButton = styled(IconButton).attrs((props) => ({
   color: props.theme.colors.ui.primary,
   icon: 'minus',
   size: 20,
}))``;
export const Quantity = styled.Text`
   font-size: ${(props) => props.theme.fontSizes.title};
`;

export const PlusButton = styled(IconButton).attrs((props) => ({
   color: props.theme.colors.ui.primary,
   icon: 'plus',
   size: 20,
}))``;
