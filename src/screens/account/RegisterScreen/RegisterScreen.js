import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import {
   AccountBackground,
   AccountContainer,
   AuthInput,
   Title,
   ErrorContainer,
   ErrorText,
} from '../LoginScreen/LoginScreen.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { colors } from '../../../infrastructure/theme/colors';

import Button from '../../../components/ui/Button/Button';

const RegisterScreen = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatedPassword, setRepeatedPassword] = useState('');
   const { onRegister, error, isLoading } = useContext(AuthenticationContext);
   return (
      <AccountBackground>
         <AccountContainer>
            <Title>Registrarse</Title>
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
            <AuthInput
               label="Repeat Password"
               value={repeatedPassword}
               secureTextEntry
               autoCapitalize="none"
               onChangeText={(p) => setRepeatedPassword(p)}
            />
            {error && (
               <ErrorContainer>
                  <ErrorText variant="error">{error}</ErrorText>
               </ErrorContainer>
            )}
            {!isLoading ? (
               <Button
                  icon="email"
                  type="large"
                  onPress={() => onRegister(email, password, repeatedPassword)}
               >
                  Registrarse
               </Button>
            ) : (
               <ActivityIndicator animating={true} color={colors.ui.primary} />
            )}
         </AccountContainer>
         <Button
            type="large"
            variation={{ backgroundColor: colors.ui.secondary, width: '30%' }}
            onPress={() => navigation.goBack()}
         >
            Volver
         </Button>
      </AccountBackground>
   );
};

export default RegisterScreen;
