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
            addOrder,
            setOrderTotal,
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
