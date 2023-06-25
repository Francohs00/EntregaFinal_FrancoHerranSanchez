import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhJ3oCwV2HAV5P5HFqPho2JH5AzJm-HvY",
  authDomain: "ford-argrntina-francoherran.firebaseapp.com",
  projectId: "ford-argrntina-francoherran",
  storageBucket: "ford-argrntina-francoherran.appspot.com",
  messagingSenderId: "75766201603",
  appId: "1:75766201603:web:15e1458173c9df5cbd7d36"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
