import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersContextProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);
   const [total, setTotal] = useState(0);

   const addOrder = (newOrder) => {
      setOrders([...orders, newOrder]);
   };

   const setOrderTotal = (total) => {
      setTotal(total);
   };

   return (
      <OrdersContext.Provider
         value={{ orders, total, addOrder, setOrderTotal }}
      >
         {children}
      </OrdersContext.Provider>
   );
};
