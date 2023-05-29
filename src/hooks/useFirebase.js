import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getIdToken,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../components/Shared/Login/Firebase/firebase.init";
authInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('');
  const auth = getAuth();
  const [error, setError] = useState("");
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const signUpUser = (e) => {
    setError("");
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUserName();
        saveUser(email, name, 'POST');
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((res) => {});
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => {
            setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, [isLoading]);

  useEffect(() => {
    fetch(`https://super-wheel-server.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://super-wheel-server.vercel.app/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}
  return {
    user,
    saveUser,
    token,
    admin,
    googleSignIn,
    signUpUser,
    signInUser,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    isLoading,
    error,
    setError,
    logOut,
    setUser,
  };
};
export default useFirebase;
