import styled from 'styled-components/native';
import { IconButton, Button } from 'react-native-paper';

export const Container = styled.View`
   flex: 1;
   flex-direction: column-reverse;
`;

export const HeaderImage = styled.ImageBackground.attrs({
   source: require('../../../assets/img/header_restaurant.png'),
})`
   height: 30%;
   width: 100%;
   position: absolute;
   top: 0;
   display: flex;
   z-index: 1;
   flex-direction: row;
   justify-content: space-between;
`;

export const SettingsButton = styled(IconButton).attrs({
   icon: 'cog',
   size: 35,
   color: 'orange',
})`
   z-index: 10;
`;

export const HelpButton = styled(Button).attrs({
   icon: 'bell-ring',
   color: 'orange',
   mode: 'contained',
   labelStyle: {
      fontSize: 12,
      color: 'white',
   },
})`
   border-radius: 20px;
   font-size: ${(props) => props.theme.fontSizes.caption};
   justify-content: center;
   width: 70%;
   z-index: 10;
   margin: ${(props) => props.theme.space[2]};
   height: 40px;
`;

export const Main = styled.View`
   height: 70%;
`;
