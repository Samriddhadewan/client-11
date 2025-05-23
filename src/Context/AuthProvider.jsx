import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const HandleCreateUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const HandleUserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user login with google
  const handleLoginUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // update user with profile with name and photo url
  const HandleUpdateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  // handle user log out
  const handleUserLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // checks if the user is logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      console.log("User login -->", currentUser);
      if(currentUser?.email){
        setUser(currentUser);
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email: currentUser?.email}, {withCredentials: true});
        console.log(data);
      }else{
        setUser(null);
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {withCredentials: true});
        console.log(data);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // the context object
  const authInfo = {
    HandleCreateUserWithEmailAndPassword,
    HandleUserLogin,
    user,
    loading,
    HandleUpdateUserProfile,
    handleUserLogOut,
    handleLoginUserWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
