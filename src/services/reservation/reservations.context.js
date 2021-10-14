import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);

   useEffect(() => {
      let unmounted = false;
      axios
         .get('http://192.168.0.6:5000/reservations')
         .then((res) => {
            if (!unmounted) setReservations(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => {
         unmounted = true;
      };
   }, [reservations]);

   const addReservation = (newReservation) => {
      console.log(newReservation);
      setReservations([...reservations, newReservation]);
      axios
         .post('http://192.168.0.6:5000/reservations', newReservation)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const removeReservation = (reservationIndex) => {
      axios
         .patch(
            `http://192.168.0.6:5000/reservations/delete/${reservationIndex}`
         )
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <ReservationsContext.Provider
         value={{ reservations, addReservation, removeReservation }}
      >
         {children}
      </ReservationsContext.Provider>
   );
};
