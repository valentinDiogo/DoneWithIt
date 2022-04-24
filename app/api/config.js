import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFIPF8_OXtCRmAE5mLISjaYG458oNlwlA",
  authDomain: "donewithitapi.firebaseapp.com",
  projectId: "donewithitapi",
  storageBucket: "donewithitapi.appspot.com",
  messagingSenderId: "639964340281",
  appId: "1:639964340281:web:ae654ce26d5c335ec42de8",
  measurementId: "G-7EXYRDFZXE",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const storage = firebase.storage();

export default app;
