import React, { useState } from 'react';
import { Provider } from 'react-native-paper';

import { Container, HeaderImage, SettingsButton, Main } from './Layout.styles';

import Button from '../../components/ui/Button/Button';
import DialogModal from '../../components/ui/DialogModal/DialogModal';

const Layout = ({ children, nav, clean }) => {
   const [visible, setVisible] = useState(false);

   const showDialog = () => setVisible(true);

   const hideDialog = () => setVisible(false);

   const buttons = !clean ? (
      <>
         <SettingsButton onPress={() => nav.navigate('settings')} />
         <Button type="icon" icon="bell-ring" onPress={showDialog}>
            Solicitar ayuda al personal
         </Button>
      </>
   ) : null;

   return (
      <Provider>
         <Container>
            <HeaderImage>{buttons}</HeaderImage>
            {visible && (
               <DialogModal visible={visible} hideDialog={hideDialog} />
            )}
            <Main>{children}</Main>
         </Container>
      </Provider>
   );
};

export default Layout;
