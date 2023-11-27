import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className='w-44 mx-auto md:mx-0'
        src='https://github.com/devandres-tech/Netflix-Clone/blob/master/src/static/images/Netflix_Logo_RGB.png?raw=true'
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