import styled from 'styled-components/native';
import { Button, IconButton } from 'react-native-paper';

export const IconAndButton = styled(Button).attrs((props) => ({
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

export const MainButton = styled(Button).attrs((props) => ({
   color: props.theme.colors.ui.primary,
   mode: 'contained',
   labelStyle: {
      fontSize: 18,
      color: 'white',
   },
}))`
   border-radius: 20px;
   font-size: ${(props) => props.theme.fontSizes.body};
   justify-content: space-around;
   font-weight: ${(props) => props.theme.fontWeights.bold}
   align-items: center;
   display: flex;
   flex-direction: row;
   width: 60%;
   z-index: 10;
   margin: ${(props) => props.theme.space[5]};
   height: 50px;
`;

export const EditButton = styled(Button).attrs((props) => ({
   icon: 'pencil',
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
   width: 40%;
   z-index: 10;
   height: 30px;
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
   width: 80%;
   z-index: 10;
   margin: ${(props) => props.theme.space[2]};
   height: 50px;
`;

export const BackMenuButton = styled(Button).attrs((props) => ({
   color: props.theme.colors.ui.secondary,
   mode: 'contained',
   labelStyle: {
      fontSize: 14,
      color: 'white',
   },
}))`
   border-radius: 20px;
   font-size: ${(props) => props.theme.fontSizes.body};
   justify-content: center;
   width: 80%;
   z-index: 10;
   margin: ${(props) => props.theme.space[2]};
   height: 50px;
`;

export const StickyButton = styled(Button).attrs((props) => ({
   color: props.theme.colors.ui.primary,
   mode: 'contained',
   labelStyle: {
      fontSize: 16,
      color: 'white',
   },
}))`
   border-radius: 20px;
   position: absolute;
   bottom: 10%;
   align-items: center;
   font-size: ${(props) => props.theme.fontSizes.body};
   justify-content: center;
   width: 75%;
   z-index: 10;
   height: 60px;
`;

export const GoBackButton = styled(IconButton).attrs((props) => ({
   color: props.theme.colors.ui.bg,
   icon: 'arrow-left-bold',
   size: 30,
}))`
   width: 40px;
   margin: ${(props) => props.theme.space[3]};
   height: 40px;
   background-color: ${(props) => props.theme.colors.ui.primary};
   border-radius: 50px;
   position: absolute;
`;
