import { db } from "./App";
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
// Function to create or update user in Firestore
export const updateUserInFirestore = async (
  user,
  { email, photoURL, displayName }
) => {
  try {
    if (!user) {
      throw new Error("User is undefined");
    }

    const usersRef = collection(db, "Users");
    const userDocRef = doc(usersRef, user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: email || user.email || "",
        displayName: displayName || user.displayName || "",
        userID: user.uid,
        createdAt: serverTimestamp(),
        profilePhoto: photoURL || "", // You may set this value during signup
      });
    } else {
      await setDoc(
        userDocRef,
        {
          email: email || user.email || "",
          displayName: displayName || user.displayName || "",
          userID: user.uid,
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error(
      "Error creating or updating user in Firestore:",
      error.message
    );
    throw error;
  }
};
