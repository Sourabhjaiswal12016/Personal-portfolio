import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJDe0819UiW56cMvzGg0_c1raX_zJR39w",
  authDomain: "react-personal-portfolio-de66e.firebaseapp.com",
  projectId: "react-personal-portfolio-de66e",
  storageBucket: "react-personal-portfolio-de66e.appspot.com",
  messagingSenderId: "768388680561",
  appId: "1:768388680561:web:ac9768beb1e41f75e384d0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
