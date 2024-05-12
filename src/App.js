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
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
