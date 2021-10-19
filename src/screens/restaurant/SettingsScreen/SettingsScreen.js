import React, { useState, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { AuthInput } from '../../account/LoginScreen/LoginScreen.styles';
import { MainForm, ButtonsContainer, Container } from './SettingsScreen.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { changePasswordRequest } from '../../../services/authentication/authentication.service';
import { colors } from '../../../infrastructure/theme/colors';

import Button from '../../../components/ui/Button/Button';
import Layout from '../../../utility/Layout/Layout';

const SettingsScreen = ({ navigation }) => {
   const { client, onClientChanged } = useContext(AuthenticationContext);
   const [name, setName] = useState(client.name);
   const [show, setShow] = useState(false);
   const [DNI, setDNI] = useState(client.DNI);
   const [telephone, setTelephone] = useState(client.telephone);
   const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000));

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || dateOfBirth;
      setDateOfBirth(currentDate);
      setShow(!show);
   };

   const showDatepicker = () => {
      setShow(true);
   };

   const saveChanges = () => {
      let modifiedClient = { ...client };
      modifiedClient.name = name;
      modifiedClient.telephone = telephone;
      modifiedClient.dateOfBirth = dateOfBirth;
      modifiedClient.DNI = DNI;
      onClientChanged(modifiedClient._id, modifiedClient);
      setName('');
      setTelephone('');
      setDateOfBirth(new Date(1598051730000));
      setDNI('');
      navigation.navigate('main');
   };

   const passwordChangeRequested = () => {
      changePasswordRequest(client.email);
   };

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
         enabled={false}
      >
         <Layout clean noSettings>
            <Container>
               <MainForm>
                  <AuthInput
                     label="Nombre"
                     value={name}
                     required
                     defaultValue={client.name}
                     onChangeText={(n) => setName(n)}
                  />
                  <AuthInput
                     label="DNI"
                     required
                     value={DNI}
                     keyboardType="numeric"
                     onChangeText={(d) => setDNI(d)}
                  />
                  <AuthInput
                     label="Teléfono"
                     required
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
               </MainForm>
               <ButtonsContainer>
                  <Button
                     onPress={passwordChangeRequested}
                     variation={{
                        width: '100%',
                        backgroundColor: colors.ui.secondary,
                     }}
                     type="large"
                  >
                     Cambiar Password
                  </Button>
                  <Button
                     type="large"
                     variation={{ width: '100%' }}
                     onPress={saveChanges}
                  >
                     Guardar Cambios
                  </Button>
               </ButtonsContainer>
            </Container>
         </Layout>
      </KeyboardAvoidingView>
   );
};

export default SettingsScreen;
