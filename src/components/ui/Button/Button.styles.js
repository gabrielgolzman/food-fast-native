import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const HelpButton = styled(Button).attrs((props) => ({
   icon: 'bell-ring',
   color: props.theme.colors.ui.primary,
   mode: 'contained',
   labelStyle: {
      fontSize: 12,
      color: 'white',
   },
}))`
   border-radius: 20px;
   font-size: ${(props) => props.theme.fontSizes.caption};
   justify-content: center;
   width: 70%;
   z-index: 10;
   margin: ${(props) => props.theme.space[2]};
   height: 40px;
`;

export const LargeButton = styled(Button).attrs((props) => ({
   color: props.theme.colors.ui.primary,
   mode: 'contained',
   labelStyle: {
      fontSize: 14,
      color: 'white',
   },
}))`
   border-radius: 20px;
   font-size: ${(props) => props.theme.fontSizes.body};
   justify-content: center;
   width: 70%;
   z-index: 10;
   margin: ${(props) => props.theme.space[2]};
   height: 50px;
`;
