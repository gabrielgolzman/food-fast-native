import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/reservations')
         .then((res) => {
            setReservations(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [reservations]);

   const addReservation = (newReservation) => {
      console.log(newReservation);
      setReservations([...reservations, newReservation]);
      axios
         .post('http://192.168.1.42:5000/reservations', newReservation)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const removeReservation = (reservationIndex) => {
      const newReservations = reservations.filter(
         (_, i) => reservationIndex !== i
      );
      setReservations(newReservations);
   };

   return (
      <ReservationsContext.Provider
         value={{ reservations, addReservation, removeReservation }}
      >
         {children}
      </ReservationsContext.Provider>
   );
};
