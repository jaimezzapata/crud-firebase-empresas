import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjbRkUiZ6u5VuP7M2XFgmuClEx28LrpPc",
  authDomain: "crud-firebase-empresas.firebaseapp.com",
  projectId: "crud-firebase-empresas",
  storageBucket: "crud-firebase-empresas.appspot.com",
  messagingSenderId: "556096004154",
  appId: "1:556096004154:web:398cf733cb29672bef1503",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)

