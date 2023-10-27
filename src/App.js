import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ConnectionsPage from "./pages/ConnectionsPage/ConnectionsPage";
import Chat from "./components/Chat/Chat";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTDShSWIh1FCcfrOTjP6JCPkg0UlEpNyI",
  authDomain: "coffee-chat-a47df.firebaseapp.com",
  projectId: "coffee-chat-a47df",
  storageBucket: "coffee-chat-a47df.appspot.com",
  messagingSenderId: "433208987432",
  appId: "1:433208987432:web:130287fea3c4e8d8a18a1d",
  measurementId: "G-YJ6XZ3QFMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Dummy Data for Chat 
const connectionsData = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: "john.jpg",
  },
  {
    id: 2,
    name: "Alice Smith",
    profilePicture: "alice.jpg",
  },
  {
    id: 3,
    name: "Julie Tall",
    profilePicture: "julie.jpg",
  },
  {
    id: 5,
    name: "George Small",
    profilePicture: "george.jpg",
  },
];


function App() {
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in. Redirect to a different page or perform actions.
      } else {
        // User is signed out.
      }
    });

    return () => {
      // Unsubscribe from the listener when the component unmounts.
      unsubscribe();
    };
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<WelcomePage />} />
      <Route path="/onboarding-page-2" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/connections" element={<ConnectionsPage people={connectionsData} />} />
      <Route path="/chat/:id" element={<Chat people={connectionsData} db={db}/>} />

    </Routes>
  );
}

export default App;
