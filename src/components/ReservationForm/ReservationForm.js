import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import { mainFilter } from '../../services/reservation/filters';

import Button from '../ui/Button/Button';

const ReservationForm = () => {
   const {
      capacityArray,
      tablesArray,
      timesArray,
      numberOfTables,
   } = require('../../../data/constants.json');
   const [date, setDate] = useState(new Date(1598051730000));
   const [show, setShow] = useState(false);
   const [availability, setAvailability] = useState(null);
   const [selectedCapacity, setSelectedCapacity] = useState('');
   const [selectedTime, setSelectedTime] = useState('');

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(!show);
      setAvailability(mainFilter(currentDate));
   };

   const showDatepicker = () => {
      setShow(true);
   };

   const time =
      availability &&
      timesArray.map((ti, i) => {
         if (availability.timeAvailableArray[i] < numberOfTables) {
            return (
               <Picker.Item
                  key={ti}
                  label={ti + ' - ' + (ti + 2) + ' horas'}
                  value={ti + ' - ' + ti + 2}
               />
            );
         }
         return;
      });

   const capacity =
      availability &&
      capacityArray.map((cap, i) => {
         if (availability.capacityAvailableArray[i] < tablesArray[i]) {
            return (
               <Picker.Item key={cap} label={cap + ' personas'} value={cap} />
            );
         }
         return;
      });

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
         {availability && (
            <>
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
                  {time}
               </Picker>
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
                  {capacity}
               </Picker>
            </>
         )}
      </>
   );
};

export default ReservationForm;
