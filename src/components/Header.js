import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../images/logo.png"
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from "../utils/configSlice"
import { toast } from 'react-toastify';
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleUserIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      toast.success('You have been successfully signed out. Come back soon!');
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
    const handleGptSearchClick = () => {
      //toggle GPt search button
      dispatch(toggleGptSearchView());
    } 
    const handleLanguageChange = (e) => {
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
    }
    const containerStyles = {
      backgroundColor: '#4158D0',
      backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      /* Add any other styles you need */
    };



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <a href='browse'> 
        <img
        className='w-44 mx-auto md:mx-0'
        src={logo}
        alt='Netflix Logo'
      />
      </a>
      

      {user && (<div className='flex p-2 justify-between'>
        {showGptSearch && (
          <select 
            className='py-2 px-4 mx-4 my-4 bg-gray-900 text-white rounded-md'
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => <option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
        )}
        <button 
          onClick={handleGptSearchClick}
          className='py-2 px-4 mx-4 my-4 text-white rounded-md'
          style={containerStyles}  
        >
            {(showGptSearch? "Home Page": "GPT Search")}
        </button>
        <div className='relative inline-block mt-4'>
          <img
            onClick={handleUserIconClick}
            className='cursor-pointer hidden md:block w-12 h-12'
            alt='usericon'
            src={user?.photoURL}
          />
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg'>
              <div className='py-1'>
                <p className='block px-4 py-2 text-gray-800'>
                  You are signed in as {user?.displayName}
                </p>
                <button
                  onClick={handleSignOut}
                  className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      
        {/* <img
          className='hidden md:block w-12 h-12'
          alt='usericon'
          src={user?.photoURL}
        />
        <button 
          onClick={handleSignOut} 
          className='font-bold  text-white'>
          (Sign Out)
        </button> */}
      </div>)}
    </div>

  );
};

export default Header;