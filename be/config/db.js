// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkD77dNRT5Sd_dVOk3MSkXtyEEV_1akVE",
  authDomain: "employee-management-bc211.firebaseapp.com",
  projectId: "employee-management-bc211",
  storageBucket: "employee-management-bc211.firebasestorage.app",
  messagingSenderId: "247041116229",
  appId: "1:247041116229:web:9c10e55ebc145c319ffb2c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
