import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

const DialogModal = ({ visible, hideDialog }) => {
   return (
      <Portal>
         <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>
               El personal fue notificado y se pondrá en contacto con usted en
               la brevedad
            </Dialog.Title>
            <Dialog.Actions>
               <Button color={colors.ui.primary} onPress={hideDialog}>
                  Volver
               </Button>
            </Dialog.Actions>
         </Dialog>
      </Portal>
   );
};

export default DialogModal;
