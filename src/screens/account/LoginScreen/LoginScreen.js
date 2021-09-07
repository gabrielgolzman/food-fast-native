import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { colors } from '../../../infrastructure/theme/colors';

import Button from '../../../components/ui/Button/Button';

import {
   AccountBackground,
   Title,
   AccountContainer,
   AuthInput,
   ErrorContainer,
   ErrorText,
} from './LoginScreen.styles';

const LoginScreen = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { onLogin, error, isLoading } = useContext(AuthenticationContext);
   return (
      <AccountBackground>
         <AccountContainer>
            <Title>Iniciar sesión</Title>
            <AuthInput
               label="Email"
               value={email}
               textContentType="emailAddress"
               keyboardType="email-address"
               autoCapitalize="none"
               onChangeText={(e) => setEmail(e)}
            />
            <AuthInput
               label="Password"
               value={password}
               secureTextEntry
               autoCapitalize="none"
               onChangeText={(p) => setPassword(p)}
            />
            {error && (
               <ErrorContainer>
                  <ErrorText variant="error">{error}</ErrorText>
               </ErrorContainer>
            )}
            {!isLoading ? (
               <Button
                  type="large"
                  icon="lock-open-outline"
                  onPress={() => onLogin(email, password)}
               >
                  Iniciar sesión
               </Button>
            ) : (
               <ActivityIndicator
                  animating={true}
                  color={colors.ui.secondary}
               />
            )}
         </AccountContainer>
      </AccountBackground>
   );
};

export default LoginScreen;
