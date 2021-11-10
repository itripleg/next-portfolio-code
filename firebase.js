import { initializeApp, getApps, getApp } from "firebase/app";
import "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpK8c0NtjXqNeMwmIRrBIjdBkYFbWu6is",
  authDomain: "fakebook-1b26a.firebaseapp.com",
  projectId: "fakebook-1b26a",
  storageBucket: "fakebook-1b26a.appspot.com",
  messagingSenderId: "624899786808",
  appId: "1:624899786808:web:dfc2910568c8dfc3babecd",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { firestore, storage };
