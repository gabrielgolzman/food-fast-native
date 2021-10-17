import * as firebase from 'firebase';

export const loginRequest = (email, password) =>
   firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
   firebase.auth().createUserWithEmailAndPassword(email, password);

export const changePasswordRequest = (email) => {
   firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((link) => {
         console.log(link);
      })
      .catch((error) => console.log(error));
};
