import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFPoC1SRVXEp7_vqJbHya1NS5fBBSfsrs",
  authDomain: "unidad5-f1f1e.firebaseapp.com",
  projectId: "unidad5-f1f1e",
  storageBucket: "unidad5-f1f1e.appspot.com",
  messagingSenderId: "182910777120",
  appId: "1:182910777120:web:920697f2d6d7ed9a4f4945",
  measurementId: "G-9N1TX3JN5K"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Firestore (BASE DE DATOS)
export const db = getFirestore(app);

