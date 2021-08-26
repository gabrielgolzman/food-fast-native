import React, { useState } from 'react';
import { Provider } from 'react-native-paper';

import { Container, HeaderImage, SettingsButton, Main } from './Layout.styles';

import Button from '../../components/ui/Button/Button';
import DialogModal from '../../components/ui/DialogModal/DialogModal';

const Layout = ({ children, nav }) => {
   const [visible, setVisible] = useState(false);

   const showDialog = () => setVisible(true);

   const hideDialog = () => setVisible(false);

   return (
      <Provider>
         <Container>
            <HeaderImage>
               <SettingsButton onPress={() => nav.navigate('settings')} />
               <Button type="help" onPress={showDialog}>
                  Solicitar ayuda al personal
               </Button>
            </HeaderImage>
            {visible && (
               <DialogModal visible={visible} hideDialog={hideDialog} />
            )}
            <Main>{children}</Main>
         </Container>
      </Provider>
   );
};

export default Layout;
