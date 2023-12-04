import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../images/logo.png"
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {

    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened
      navigate("/error");
    });
  }

  // This code snippet sets up an effect that listens for changes in the user's authentication state. If the user is authenticated, their information is added to the Redux store and they are navigated to the "/browse" page. If the user is not authenticated
  useEffect(() => {
    // onAuthStateChanged is likely a function that observes changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is authenticated (signed in), extract user information
        const { uid, email, displayName, photoURL } = user;

        // Dispatch an action to update the Redux store with user information
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );

        // Redirect the user to the "/browse" route
        navigate("/browse");
      } else {
        // If the user is not authenticated (signed out), dispatch an action to clear user information
        dispatch(removeUser());

        // Redirect the user to the home route ("/")
        navigate("/");
        // User is signed out
        // ...
      }
    });

    // The returned function will be called when the component unmounts
    // It's used to unsubscribe from the onAuthStateChanged observer to prevent memory leaks
    //unsubsribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className='w-44 mx-auto md:mx-0'
        src={logo}
        alt='Netflix Logo'
      />
      {user && (<div className='flex p-2'>
        <img
          className='w-12 h-12'
          alt='usericon'
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className='font-bold  text-white'>(Sign Out)</button>
      </div>)}
    </div>

  );
};

export default Header;