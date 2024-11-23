import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig1: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_TICKET_LISTS,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_TICKET_LISTS,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL_TICKET_LISTS,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_TICKET_LISTS,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_TICKET_LISTS,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID_TICKET_LISTS,
  appId: process.env.NEXT_PUBLIC_APP_ID_TICKET_LISTS,
};

const firebaseConfig2: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_LINE_CHART,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_LINE_CHART,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL_LINE_CHART,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_LINE_CHART,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_LINE_CHART,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID_LINE_CHART,
  appId: process.env.NEXT_PUBLIC_APP_ID_LINE_CHART,
};

// Inisialisasi Firebase
const app1 = !getApps().some(app => app.name === 'app1') ? initializeApp(firebaseConfig1, 'app1') : getApp('app1');
const app2 = !getApps().some(app => app.name === 'app2') ? initializeApp(firebaseConfig1, 'app2') : getApp('app2');

// Inisialisasi layanan Firebase (sesuaikan dengan kebutuhan)
const database1 = getDatabase(app1); 
const database2 = getDatabase(app2); 

export { database1, database2 };