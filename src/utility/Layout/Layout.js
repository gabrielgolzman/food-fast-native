import React from 'react';

import { Container, HeaderImage, SettingsButton, Main } from './Layout.styles';

import Button from '../../components/ui/Button/Button';

const Layout = ({ children, nav }) => {
   return (
      <Container>
         <HeaderImage>
            <SettingsButton onPress={() => nav.navigate('settings')} />
            <Button type="help" onPress={() => nav.navigate('help')}>
               Solicitar ayuda al personal
            </Button>
         </HeaderImage>
         <Main>{children}</Main>
      </Container>
   );
};

export default Layout;
