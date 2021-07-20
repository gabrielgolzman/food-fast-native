import React from 'react';

import {
   Container,
   HeaderImage,
   SettingsButton,
   HelpButton,
   Main,
} from './Layout.styles';

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
