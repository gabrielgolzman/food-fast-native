import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

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
   const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000));
   const [show, setShow] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatedPassword, setRepeatedPassword] = useState('');
   const [name, setName] = useState('');
   const [telephone, setTelephone] = useState('');
   const [DNI, setDNI] = useState('');

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || dateOfBirth;
      setDateOfBirth(currentDate);
      setShow(!show);
   };

   const showDatepicker = () => {
      setShow(true);
   };

   const { onRegister, error, isLoading } = useContext(AuthenticationContext);
   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
         enabled={false}
      >
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
                  label="Repetir Password"
                  value={repeatedPassword}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={(p) => setRepeatedPassword(p)}
               />
               <AuthInput
                  label="Nombre y Apellido"
                  value={name}
                  onChangeText={(n) => setName(n)}
               />
               <AuthInput
                  label="DNI"
                  value={DNI}
                  keyboardType="numeric"
                  onChangeText={(d) => setDNI(d)}
               />
               <AuthInput
                  label="Teléfono"
                  value={telephone}
                  keyboardType="phone-pad"
                  onChangeText={(t) => setTelephone(t)}
               />
               <Button
                  type="large"
                  onPress={showDatepicker}
                  variation={{ width: '80%' }}
               >
                  Fecha de nacimiento
               </Button>
               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={dateOfBirth}
                     mode="date"
                     is24Hour={true}
                     display="default"
                     onChange={onChange}
                  />
               )}
               {error && (
                  <ErrorContainer>
                     <ErrorText variant="error">{error}</ErrorText>
                  </ErrorContainer>
               )}
               {!isLoading ? (
                  <Button
                     icon="email"
                     type="large"
                     onPress={() =>
                        onRegister(
                           email,
                           password,
                           repeatedPassword,
                           name,
                           DNI,
                           telephone,
                           dateOfBirth
                        )
                     }
                  >
                     Registrarse
                  </Button>
               ) : (
                  <ActivityIndicator
                     animating={true}
                     color={colors.ui.primary}
                  />
               )}
            </AccountContainer>
            <Button
               type="large"
               variation={{
                  backgroundColor: colors.ui.secondary,
                  width: '30%',
               }}
               onPress={() => navigation.goBack()}
            >
               Volver
            </Button>
         </AccountBackground>
      </KeyboardAvoidingView>
   );
};

export default RegisterScreen;
