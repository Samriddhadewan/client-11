import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  
  // create user with email and password 
  const HandleCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // user login 
  const HandleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // user login with google 
  const handleLoginUserWithGoogle =()=>{
    return signInWithPopup(auth, provider);
  }

  // update user with profile with name and photo url 
  const HandleUpdateUserProfile = (updateData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updateData);
  }

  // handle user log out 
  const handleUserLogOut =()=>{
    return signOut(auth);
  }


  // checks if the user is logged in or not
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
        setLoading(false)
        console.log("User login -->",currentUser);
      })
      return () => unsubscribe()
  }, [auth])



  // the context object 
  const authInfo = {
    HandleCreateUserWithEmailAndPassword,
    HandleUserLogin,
    user,
    loading,
    HandleUpdateUserProfile,
    handleUserLogOut,
    handleLoginUserWithGoogle
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider