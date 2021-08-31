import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import Button from '../ui/Button/Button';

const ReservationForm = () => {
   const [date, setDate] = useState(new Date(1598051730000));
   const [show, setShow] = useState(false);
   const [selectedCapacity, setSelectedCapacity] = useState('');
   const [selectedTime, setSelectedTime] = useState('');

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(!show);
   };

   const showDatepicker = () => {
      setShow(true);
   };

   return (
      <>
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
               mode="date"
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
            <Picker.Item label="6 personas" value="6" />
         </Picker>
         <Picker
            style={{
               height: 50,
               width: '60%',
               color: 'green',
               justifyContent: 'center',
            }}
            mode="dropdown"
            selectedValue={selectedTime}
            onValueChange={(itemValue) => setSelectedTime(itemValue)}
         >
            <Picker.Item label="15 - 17 horas" value="0" />
            <Picker.Item label="17 - 19 horas" value="1" />
            <Picker.Item label="19 - 21 horas" value="2" />
         </Picker>
      </>
   );
};

export default ReservationForm;
