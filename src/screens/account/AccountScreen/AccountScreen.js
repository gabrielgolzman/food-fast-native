import React from 'react';

import {
   AccountBackground,
   AccountContainer,
   Title,
} from '../LoginScreen/LoginScreen.styles';

import Button from '../../../components/ui/Button/Button';

const AccountScreen = ({ navigation }) => {
   return (
      <AccountBackground>
         <AccountContainer>
            <Title>¡Bienvenido!</Title>
            <Button
               type="large"
               icon="lock-open-outline"
               onPress={() => navigation.navigate('login')}
            >
               Iniciar Sesión
            </Button>
            <Button
               type="large"
               icon="email"
               onPress={() => navigation.navigate('register')}
            >
               Registrarse
            </Button>
         </AccountContainer>
      </AccountBackground>
   );
};

export default AccountScreen;
