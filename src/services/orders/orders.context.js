import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AuthenticationContext } from '../authentication/authentication.context';
import { useSockets } from '../socket/socket.context';
import { EVENTS } from '../../config/events';

export const OrdersContext = createContext();

export const OrdersContextProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);
   const [total, setTotal] = useState(0);
   const [invoices, setInvoices] = useState([]);
   const [cooking, setCooking] = useState(true);
   const { client } = useContext(AuthenticationContext);
   const { socket } = useSockets();

   useEffect(() => {
      axios
         .get('http://192.168.0.6:5000/invoices')
         .then((res) => {
            setInvoices(res.data);
         })
         .catch((error) => console.log(error));
   }, []);

   useEffect(() => {
      socket.on(EVENTS.SERVER.TOGGLE_SERVED, (value) => {
         setCooking(!value);
      });
      return () => setCooking(!cooking);
   }, [socket, invoices]);

   const addOrder = (newOrder) => {
      setOrders([...orders, newOrder]);
   };

   const cleanOrder = () => {
      setOrders([]);
      setOrderTotal(0);
   };

   const askForHelp = (number) => {
      axios
         .patch(`http://192.168.0.6:5000/tables/help/${number}`)
         .then((res) => {
            socket.emit(EVENTS.CLIENT.HELP_ASKED, number);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const createInvoice = async () => {
      const ordersMapped = orders.map((o) => {
         return {
            quantity: o.quantity,
            title: o.optionName,
            unitPrice: o.unitPrice,
            clarifications: o.clarifications,
         };
      });
      const invoice = {
         invoiceNumber: total + 'BR-F',
         total,
         details: ordersMapped,
         client: client[0]._id,
      };

      axios
         .post('http://192.168.0.6:5000/invoices', invoice)
         .then((res) => {
            setInvoices([...invoices, res.data.invoice]);
            socket.emit(EVENTS.CLIENT.NEW_INVOICE, res.data.invoice);
         })
         .catch((error) => console.log(error));
   };

   const toggleCooking = () => {
      setCooking(!cooking);
   };

   const setOrderTotal = (total) => {
      setTotal(total);
   };

   const updateTotal = () => {};

   const setCheckbox = (id) => {
      let tempOrders = orders.map((ord) => {
         if (id === ord.id) {
            return { ...ord, isChecked: !ord.isChecked };
         }
         return ord;
      });
      setOrders(tempOrders);
   };

   const clearCheckboxes = () => {
      let tempOrders = orders.map((ord) => {
         return { ...ord, isChecked: false };
      });
      setOrders(tempOrders);
   };

   const deleteOrders = (ordersToDelete) => {
      const tempOrders = orders.filter((ord) => !ordersToDelete.includes(ord));
      setOrders(tempOrders);
      if (tempOrders.length !== 0) {
         const amountArray = tempOrders.map((order) => {
            return order.partialPrice;
         });
         return amountArray.reduce((cur, val) => cur + val);
      }
      return 0;
   };

   return (
      <OrdersContext.Provider
         value={{
            orders,
            total,
            invoices,
            addOrder,
            askForHelp,
            cleanOrder,
            setOrderTotal,
            createInvoice,
            cooking,
            toggleCooking,
            updateTotal,
            setCheckbox,
            clearCheckboxes,
            deleteOrders,
         }}
      >
         {children}
      </OrdersContext.Provider>
   );
};
