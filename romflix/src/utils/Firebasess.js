
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhvvWJTFcRmhRHXceqTW7zZbw2laJHtzg",
  authDomain: "romflix-32b34.firebaseapp.com",
  projectId: "romflix-32b34",
  storageBucket: "romflix-32b34.appspot.com",
  messagingSenderId: "1002140416668",
  appId: "1:1002140416668:web:f277e57c7bde2906f84b59",
  measurementId: "G-CS8KFDVJZ3"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);