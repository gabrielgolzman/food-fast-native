import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import {
   Main,
   TitleContainer,
   Title,
   ReserveForm,
} from './ReserveScreen.styles';

import Layout from '../../utility/Layout/Layout';
import Button from '../../components/ui/Button/Button';
const ReserveScreen = () => {
   const [date, setDate] = useState(new Date(1598051730000));
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
   const [selectedCapacity, setSelectedCapacity] = useState('');

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(!show);
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   const showDatepicker = () => {
      showMode('date');
   };

   return (
      <Layout clean>
         <Main>
            <TitleContainer>
               <Title>¡Realiza tu reserva!</Title>
            </TitleContainer>
            <ReserveForm>
               <Button
                  type="large"
                  onPress={showDatepicker}
                  variation={{ width: '40%' }}
               >
                  Día
               </Button>

               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={mode}
                     is24Hour={true}
                     minimumDate={Date.now()}
                     display="default"
                     onChange={onChange}
                  />
               )}
               <Picker
                  style={{
                     height: 50,
                     width: '60%',
                     color: 'green',
                     justifyContent: 'center',
                  }}
                  mode="dropdown"
                  selectedValue={selectedCapacity}
                  onValueChange={(itemValue) => setSelectedCapacity(itemValue)}
               >
                  <Picker.Item label="2 personas" value="2" />
                  <Picker.Item label="4 personas" value="4" />
               </Picker>
            </ReserveForm>
         </Main>
      </Layout>
   );
};

export default ReserveScreen;
