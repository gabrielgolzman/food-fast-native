import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersContextProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);

   const addOrder = (newOrder) => {
      setOrders([...orders, newOrder]);
   };

   return (
      <OrdersContext.Provider value={{ orders, addOrder }}>
         {children}
      </OrdersContext.Provider>
   );
};
