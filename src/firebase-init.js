
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3_RDljVsejBBZhVNkbx7WFBmfNFPANfQ",
  authDomain: "active-chat-b000e.firebaseapp.com",
  projectId: "active-chat-b000e",
  storageBucket: "active-chat-b000e.appspot.com",
  messagingSenderId: "715440590027",
  appId: "1:715440590027:web:f846cbca2c3f810f281f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

