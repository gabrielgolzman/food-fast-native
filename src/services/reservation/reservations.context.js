import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { useSockets } from '../socket/socket.context';
import { EVENTS } from '../../config/events';

export const ReservationsContext = createContext();

export const ReservationsContextProvider = ({ children }) => {
   const [reservations, setReservations] = useState([]);
   const [admit, setAdmit] = useState(false);
   const { socket } = useSockets();

   useEffect(() => {
      axios
         .get('http://192.168.0.6:5000/reservations')
         .then((res) => {
            setReservations(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   useEffect(() => {
      socket.on(EVENTS.SERVER.ADMIN.RESERVATION_DELETED, (id) => {
         let newReservations = [...reservations];
         newReservations.splice(
            reservations.findIndex((res) => res._id === id),
            1
         );
         setReservations(newReservations);
      });
   }, [socket, reservations]);

   useEffect(() => {
      socket.on(EVENTS.SERVER.TOGGLE_RESERVATION, ({ newReservations }) => {
         setAdmit(newReservations.some((r) => r.state === 'En Local'));
         setReservations(newReservations);
      });
   }, [socket, reservations]);

   const addReservation = (newReservation) => {
      axios
         .post('http://192.168.0.6:5000/reservations', newReservation)
         .then((res) => {
            newReservation = { ...newReservation, _id: res.data.reservationId };
            setReservations([...reservations, newReservation]);
            socket.emit(EVENTS.SERVER.NEW_RESERVATION, {
               newReservation,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const removeReservation = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/reservations/delete/${id}`)
         .then((res) => {
            let newReservations = [...reservations];
            newReservations.splice(
               reservations.findIndex((r) => r._id === id),
               1
            );
            setReservations(newReservations);
            socket.emit(EVENTS.CLIENT.RESERVATION_DELETED, { id });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <ReservationsContext.Provider
         value={{ reservations, admit, addReservation, removeReservation }}
      >
         {children}
      </ReservationsContext.Provider>
   );
};
