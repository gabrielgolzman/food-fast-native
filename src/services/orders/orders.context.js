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

   const setCheckbox = (id) => {
      let tempOrders = orders.map((ord) => {
         if (id === ord.id) {
            return { ...ord, isChecked: !ord.isChecked };
         }
         return ord;
      });
      setOrders(tempOrders);
   };

   return (
      <OrdersContext.Provider
         value={{ orders, total, addOrder, setOrderTotal, setCheckbox }}
      >
         {children}
      </OrdersContext.Provider>
   );
};
