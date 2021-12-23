import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';
import axios from 'axios';

import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [client, setClient] = useState(null);

   const onLogin = (email, password) => {
      setIsLoading(true);
      loginRequest(email, password)
         .then((u) => {
            setUser(u);
            setIsLoading(false);
            axios
               .get(`http://192.168.0.6:5000/clients/${email}`)
               .then((res) => setClient(res.data))
               .catch((error) => console.log(error));
         })
         .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   const onClientChanged = (id, modifiedClient) => {
      axios
         .patch(`http://192.168.0.6:5000/clients/${id}`, modifiedClient)
         .then((res) => {
            console.log(res.data.modifiedClient);
            setClient({ ...res.data.modifiedClient, modifiedClient });
         })
         .catch((error) => console.log(error));
   };

   firebase.auth().onAuthStateChanged((usr) => {
      if (usr) {
         setUser(usr);
         setIsLoading(false);
         if (!client)
            axios
               .get(`http://192.168.0.6:5000/clients/${usr.email}`)
               .then((res) => setClient(res.data))
               .catch((error) => console.log(error));
      } else {
         setIsLoading(false);
      }
   });

   const onRegister = (
      email,
      password,
      repeatedPassword,
      name,
      DNI,
      telephone,
      dateOfBirth
   ) => {
      if (password !== repeatedPassword) {
         setError('Error: los passwords no coinciden');
         return;
      }
      setIsLoading(true);
      registerRequest(email, password)
         .then((u) => {
            setUser(u);
            setIsLoading(false);
            axios
               .post('http://192.168.0.6:5000/clients', {
                  email,
                  DNI,
                  name,
                  telephone,
                  dateOfBirth,
               })
               .then((res) => setClient(res.data))
               .catch((error) => console.log(error));
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
            client,
            error,
            onLogin,
            onRegister,
            onLogout,
            onClientChanged,
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};
