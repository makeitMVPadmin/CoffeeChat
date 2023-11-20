import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { SignUp } from "./pages/SignUp/SignUp";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import ConnectionsPage from "./pages/ConnectionsPage/ConnectionsPage";
import Chat from "./components/Chat/Chat";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Navbar from "./components/Navbar/Navbar";
import ConnectionsNext from "./pages/ConnectionsNext/ConnectionsNext";
import SearchPage from "./pages/SearchPage/SearchPage";
import SchedulingPage from "./pages/SchedulingPage/SchedulingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useState } from "react";

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
  measurementId: "G-YJ6XZ3QFMH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Dummy Data for People
const connectionsData = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: "john.jpg",
    timePreferences: ["9:00am", "2:30pm", "4:00pm"],
  },
  {
    id: 2,
    name: "Alice Smith",
    profilePicture: "alice.jpg",
    timePreferences: ["10:00am", "3:30pm", "5:00pm"],
  },
  {
    id: 3,
    name: "Julie Tall",
    profilePicture: "julie.jpg",
    timePreferences: ["9:30am", "3:00pm", "4:30pm"],
  },
  {
    id: 5,
    name: "George Small",
    profilePicture: "george.jpg",
    timePreferences: ["7:30am", "5:00pm", "7:30pm"],
  },
];

function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (loading) {
    return null;
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/onboarding" />} />
      <Route path="/onboarding" element={<WelcomePage />} />
      <Route path="/onboarding-page-2" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      {user ? (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/connections"
            element={<ConnectionsPage people={connectionsData} />}
          />
          <Route path="/connections-next" element={<ConnectionsNext />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/EditProfile" element={<EditProfile/>}/>
          <Route
            path="/chat/:id"
            element={<Chat people={connectionsData} db={db} />}
          />
          <Route
            path="/scheduling/:id"
            element={<SchedulingPage people={connectionsData} db={db} />}
          />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
