import React, { useState, useContext } from 'react';
import { Provider } from 'react-native-paper';

import { Container, HeaderImage, Main } from './Layout.styles';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { OrdersContext } from '../../services/orders/orders.context';

import Button from '../../components/ui/Button/Button';
import DialogModal from '../../components/ui/DialogModal/DialogModal';

const Layout = ({ children, clean }) => {
   const [visible, setVisible] = useState(false);
   const { onLogout } = useContext(AuthenticationContext);
   const { askForHelp } = useContext(OrdersContext);

   const showDialog = () => {
      askForHelp(23); //hardcoded for now
      setVisible(true);
   };

   const hideDialog = () => setVisible(false);

   const buttons = !clean ? (
      <>
         {/* <SettingsButton onPress={() => nav.navigate('settings')} /> */}
         <Button
            type="icon"
            variation={{ width: '50%' }}
            icon="door-open"
            onPress={onLogout}
         >
            Cerrar sesión
         </Button>
         <Button type="icon" icon="bell-ring" onPress={showDialog}>
            Solicitar ayuda al personal
         </Button>
      </>
   ) : (
      <Button
         type="icon"
         variation={{ width: '50%' }}
         icon="door-open"
         onPress={onLogout}
      >
         Cerrar sesión
      </Button>
   );

   return (
      <Provider>
         <Container>
            <HeaderImage>{buttons}</HeaderImage>
            {visible && (
               <DialogModal
                  type="help"
                  visible={visible}
                  hideDialog={hideDialog}
               />
            )}
            <Main>{children}</Main>
         </Container>
      </Provider>
   );
};

export default Layout;
