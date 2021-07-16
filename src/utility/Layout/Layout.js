import React from 'react';
import styled from 'styled-components/native';
import { IconButton, Button } from 'react-native-paper';

const Container = styled.View`
   flex: 1;
   flex-direction: column-reverse;
`;

const HeaderImage = styled.ImageBackground.attrs({
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

const SettingsButton = styled(IconButton).attrs({
   icon: 'cog',
   size: 35,
   color: 'orange',
})`
   z-index: 10;
`;

const HelpButton = styled(Button).attrs({
   icon: 'bell-ring',
   color: 'orange',
   mode: 'contained',
   labelStyle: {
      fontSize: 13,
      color: 'white',
   },
})`
   border-radius: 20px;
   font-size: 10px;
   justify-content: center;
   width: 70%;
   z-index: 10;
   margin: 10px;
   height: 40px;
`;

const Main = styled.View`
   height: 70%;
`;

const Layout = ({ children }) => {
   return (
      <Container>
         <HeaderImage>
            <SettingsButton
               onPress={() => console.log('Pressed the settings!')}
            />
            <HelpButton onPress={() => console.log('Help needed!')}>
               Solicitar ayuda al personal
            </HelpButton>
         </HeaderImage>
         <Main>{children}</Main>
      </Container>
   );
};

export default Layout;
