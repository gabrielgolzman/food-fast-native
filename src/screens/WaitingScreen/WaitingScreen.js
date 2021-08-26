import React, { useState, useContext } from 'react';
import { Provider } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import {
   SettingsButton,
   BackgroundCover,
   HeaderContainer,
   MainContainer,
   GreetText,
} from './WaitingScreen.styles';
import { colors } from '../../infrastructure/theme/colors';
import { OrdersContext } from '../../services/orders/orders.context';

import Button from '../../components/ui/Button/Button';
import DialogModal from '../../components/ui/DialogModal/DialogModal';
import { FadeInView } from '../../utility/animations/FadeAnimation';

const WaitingScreen = ({ navigation }) => {
   const { cooking } = useContext(OrdersContext);
   const [visible, setVisible] = useState(false);

   const showDialog = () => setVisible(true);

   const hideDialog = () => setVisible(false);

   const message = cooking ? (
      <>
         <MaterialCommunityIcons
            name="chef-hat"
            size={150}
            color={colors.ui.primary}
         />
         <FadeInView>
            <GreetText>Estamos preparando su comida... </GreetText>
         </FadeInView>
      </>
   ) : (
      <>
         <MaterialIcons name="fastfood" size={150} color={colors.ui.primary} />
         <Button
            onPress={() => navigation.navigate('menu')}
            variation={{
               width: '65%',
               backgroundColor: colors.ui.secondary,
            }}
            type="large"
         >
            Volver a la carta
         </Button>
         <FadeInView>
            <GreetText>¡Disfrute su comida! </GreetText>
         </FadeInView>
      </>
   );

   return (
      <Provider>
         <BackgroundCover>
            <HeaderContainer>
               <SettingsButton
                  onPress={() => navigation.navigate('settings')}
               />
               <Button type="help" onPress={showDialog}>
                  Solicitar ayuda al personal
               </Button>
               {visible && (
                  <DialogModal visible={visible} hideDialog={hideDialog} />
               )}
            </HeaderContainer>
            <MainContainer>{message}</MainContainer>
         </BackgroundCover>
      </Provider>
   );
};

export default WaitingScreen;
