import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { isSaturday, isSunday, lastDayOfWeek, sub, add } from 'date-fns';

import { mainFilter } from '../../services/reservation/filters';
import {
   ReservationDateText,
   FormContainer,
   PickerContainer,
   ReservationPicker,
} from './ReservationForm.styles';

import Button from '../ui/Button/Button';

const ReservationForm = ({ onReservationMade }) => {
   const {
      capacityArray,
      tablesArray,
      timesArray,
      numberOfTables,
   } = require('../../../data/constants.json');
   const [date, setDate] = useState(new Date(1598051730000));
   const [show, setShow] = useState(false);
   const [availability, setAvailability] = useState(null);
   const [selectedCapacity, setSelectedCapacity] = useState(2);
   const [selectedTime, setSelectedTime] = useState(17);

   const startDate = () => {
      let curr = new Date();
      if (isSaturday(curr)) {
         return add(curr, { days: 2 });
      } else if (isSunday(curr)) {
         return add(curr, { days: 1 });
      }
      return curr;
   };

   const lastDate = () => {
      let curr = new Date();
      let last = lastDayOfWeek(curr, { weekStartsOn: 1 });
      if (isSaturday(curr)) {
         return add(curr, { days: 6 });
      } else if (isSunday(curr)) {
         return add(curr, { days: 5 });
      }
      return sub(last, { days: 2 });
   };

   let dateString = '';

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(!show);
      if (selectedDate !== undefined) setAvailability(mainFilter(currentDate));
   };

   const showDatepicker = () => {
      setShow(true);
   };

   const makeReservation = () => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate('es-AR', {
         day: '2-digit',
      });
      onReservationMade({
         selectedDate: { day, month, year },
         selectedTime,
         selectedCapacity,
      });
   };

   const time =
      availability &&
      timesArray.map((ti, i) => {
         if (availability.timeAvailableArray[i] < numberOfTables) {
            return (
               <Picker.Item
                  key={ti}
                  label={ti + ' - ' + (ti + 2) + ' horas'}
                  value={ti}
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
      <FormContainer>
         <Button
            type="large"
            onPress={showDatepicker}
            variation={{ width: '40%' }}
         >
            Día
         </Button>
         {date && <ReservationDateText>{dateString}</ReservationDateText>}
         {show && (
            <DateTimePicker
               testID="dateTimePicker"
               value={date}
               mode="date"
               is24Hour={true}
               minimumDate={startDate()}
               maximumDate={lastDate()}
               display="default"
               onChange={onChange}
            />
         )}
         {availability && (
            <>
               <PickerContainer>
                  <ReservationPicker
                     mode="dropdown"
                     onValueChange={(itemValue) => setSelectedTime(itemValue)}
                     selectedValue={selectedTime}
                  >
                     {time}
                  </ReservationPicker>
               </PickerContainer>
               <PickerContainer>
                  <ReservationPicker
                     mode="dropdown"
                     onValueChange={(itemValue) =>
                        setSelectedCapacity(itemValue)
                     }
                     selectedValue={selectedCapacity}
                  >
                     {capacity}
                  </ReservationPicker>
               </PickerContainer>
               <Button
                  type="large"
                  onPress={makeReservation}
                  variation={{ width: '40%' }}
               >
                  ¡Reservá!
               </Button>
            </>
         )}
      </FormContainer>
   );
};

export default ReservationForm;
