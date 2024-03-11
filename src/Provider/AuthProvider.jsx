import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxiosOpen from "../Hooks/useAxiosOpen";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosOpen = useAxiosOpen();
  const [user, setUser] = useState(null);
  const [isLoading, setInLoading] = useState(true);
  //   create user
  const createUser = (email, password) => {
    setInLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Login
  const login = (email, password) => {
    setInLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   update profile
  const updateUser = (name) => {
    setInLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };
  //   LogOut
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        //seething
        const userInfo = { email: currentUser.email };
        axiosOpen.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access token", res.data.token);
          }
        });
      } else {
        // logOut token
        localStorage.removeItem("access token");
      }
      setInLoading(false);
    });
    return () => {
      return unSubscribe;
    };
  }, [axiosOpen]);
  const authInfo = { user, isLoading, createUser, logOut, login, updateUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
