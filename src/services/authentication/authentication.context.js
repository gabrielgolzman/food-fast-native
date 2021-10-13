import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';

import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState(null);
   const [userEmail, setUserEmail] = useState('');
   const [error, setError] = useState(null);

   const onLogin = (email, password) => {
      setIsLoading(true);
      setUserEmail(email);
      loginRequest(email, password)
         .then((u) => {
            setUser(u);
            setIsLoading(false);
         })
         .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   firebase.auth().onAuthStateChanged((usr) => {
      if (usr) {
         setUser(usr);
         setIsLoading(false);
      } else {
         setIsLoading(false);
      }
   });

   const onRegister = (email, password, repeatedPassword) => {
      if (password !== repeatedPassword) {
         setError('Error: los passwords no coinciden');
         return;
      }
      setIsLoading(true);
      registerRequest(email, password)
         .then((u) => {
            setUser(u);
            setIsLoading(false);
         })
         .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   const onLogout = () => {
      setUser(null);
      firebase.auth().signOut();
   };

   return (
      <AuthenticationContext.Provider
         value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            userEmail,
            onLogin,
            onRegister,
            onLogout,
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};
