import React, { useRef, useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import backgroundImage from "../images/backgroundImage.jpg"
import  UserProfileIcon  from '../images/userProfileIcon.jpg';
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch()
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //We have to validate the form data here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignInForm) {
      //Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user , {
            displayName: name.current.value, photoURL: UserProfileIcon
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.current.user; //was user before
            //if we use user just like previously, in commit 3386f8c, that will not solve the error as the user will be extracted from the above, we need to use the user which is updated already
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorMessage + errorCode)
        });

    }
    else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + errorCode)
          

        });

    }
  }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img
          src={backgroundImage}
          alt='Netflix bg'
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='rounded w-3/12 text-white absolute p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && 
        <input
          ref={name}
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full'
          style={{ backgroundColor: '#333333' }}
        />}
        <input
          ref={email}
          type='text'
          placeholder='Email or phone number'
          className='p-4 my-4 w-full'
          style={{ backgroundColor: '#333333' }}
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full'
          style={{ backgroundColor: '#333333' }}
        />
        <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 w-full bg-red-700 rounded hover:bg-red-800' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p>{isSignInForm ? "New to Netflix?" : "Already a User?"} <a href='/#' onClick={toggleSignInForm}>{isSignInForm ? "Sign up" : "Sign in"}</a></p>
      </form>
    </div>
  )
}

export default Login