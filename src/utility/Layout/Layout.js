import React from 'react';

import {
   Container,
   HeaderImage,
   SettingsButton,
   HelpButton,
   Main,
} from './Layout.styles';

const Layout = ({ children, nav }) => {
   return (
      <Container>
         <HeaderImage>
            <SettingsButton onPress={() => nav.navigate('settings')} />
            <HelpButton onPress={() => nav.navigate('help')}>
               Solicitar ayuda al personal
            </HelpButton>
         </HeaderImage>
         <Main>{children}</Main>
      </Container>
   );
};

export default Layout;
