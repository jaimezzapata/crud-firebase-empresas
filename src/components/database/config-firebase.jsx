import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGKTPLeJyEvi69JIIUFVNv5syU6Evze7w",
  authDomain: "crud-empresas-firebase.firebaseapp.com",
  projectId: "crud-empresas-firebase",
  storageBucket: "crud-empresas-firebase.appspot.com",
  messagingSenderId: "757391473123",
  appId: "1:757391473123:web:ad07abc63c35998ad208d6",
};

const app = initializeApp(firebaseConfig);
export const connDataBase = getFirestore(app)
