import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersContextProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);
   const [total, setTotal] = useState(0);
   const [cooking, setCooking] = useState(false);

   const addOrder = (newOrder) => {
      setOrders([...orders, newOrder]);
   };

   const toggleCooking = () => {
      setCooking(!cooking);
   };

   const setOrderTotal = (total) => {
      setTotal(total);
   };

   return (
      <OrdersContext.Provider
         value={{
            orders,
            cooking,
            total,
            addOrder,
            setOrderTotal,
            toggleCooking,
         }}
      >
         {children}
      </OrdersContext.Provider>
   );
};
