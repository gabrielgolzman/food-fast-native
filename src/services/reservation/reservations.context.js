import React, { createContext, useState } from 'react';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);

   const addReservation = (newReservation) => {
      setReservations([...reservations, newReservation]);
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
