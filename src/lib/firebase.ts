import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Jika menggunakan Realtime Database
import { getFirestore } from "firebase/firestore"; // Jika menggunakan Firestore
import { getAuth } from "firebase/auth"; // Jika menggunakan Authentication
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi layanan Firebase (sesuaikan dengan kebutuhan)
const database = getDatabase(app); // Untuk Realtime Database
const firestore = getFirestore(app); // Untuk Firestore
const auth = getAuth(app); // Untuk Authentication

export { app, database, firestore, auth };