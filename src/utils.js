import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getCurrentUserId = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Unsubscribe to avoid memory leaks

      if (user) {
        resolve(user.uid); // Resolve with the user's ID
      } else {
        reject(new Error('User not authenticated')); // Reject if the user is not authenticated
      }
    });
  });
};