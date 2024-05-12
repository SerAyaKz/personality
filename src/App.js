import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import List from "./pages/List";
import CVAnalysis from "./pages/CVAnalysis";
import CreateAccount from "./pages/CreateAccount";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfCxIl0qKiKCtx_YvbESCrHoYElc7sdiQ",
  authDomain: "personalityprediction-d8ac8.firebaseapp.com",
  projectId: "personalityprediction-d8ac8",
  storageBucket: "personalityprediction-d8ac8.appspot.com",
  messagingSenderId: "511533027657",
  appId: "1:511533027657:web:a1190c1f775db77a3f4a98",
  measurementId: "G-C0DJ2YC06N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<List />} />
      <Route path="/cv-analysis/:applicant_id" element={<CVAnalysis />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
    
  );
}
export default App;
