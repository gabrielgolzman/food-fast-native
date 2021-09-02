import React, { createContext, useState } from 'react';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);

   const addReservation = (newReservation) => {
      setReservations([...reservations, newReservation]);
   };

   return (
      <ReservationsContext.Provider value={{ reservations, addReservation }}>
         {children}
      </ReservationsContext.Provider>
   );
};
