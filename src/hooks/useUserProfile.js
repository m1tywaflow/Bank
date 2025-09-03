import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export function useUserProfile() {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;

    const loadProfile = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProfile(snap.data());
      } else {
        // создаем запись при первом входе
        const defaultProfile = {
          uid: user.uid,
          email: user.email,
          nickname: user.email, // ник по умолчанию = почта
          avatarUrl: null,
        };
        await setDoc(ref, defaultProfile);
        setProfile(defaultProfile);
      }
    };

    loadProfile();
  }, [user]);

  return [profile, setProfile];
}
