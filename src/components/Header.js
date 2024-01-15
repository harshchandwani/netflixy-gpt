// import React, { useEffect, useState } from "react";
// import logo from "../images/logo.png"
// import { Avatar, Box, IconButton, ListItem, Tooltip } from "@mui/material";
// import { Logout } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../utils/firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";
// import { toggleGptSearchView } from "../utils/gptSlice";
// import { SUPPORTED_LANGUAGES } from "../utils/constants";
// import { changeLanguage } from "../utils/configSlice";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
// import HomeIcon from "@mui/icons-material/Home";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isGptPageActive = useSelector((store) => store.gpt.showGptSearchPage);

//   const user = useSelector((store) => store.user);
//   const path = useSelector((store) => store.path.path);

//   useEffect(() => {
//     const unsubsrcibe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName, photoURL } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//             photoURL: photoURL,
//           })
//         );
//         navigate("/browse");
//       } else {
//         // User is signed out
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });
//     handleGptSearchClick();
//     // unsubscribe when component unmounts
//     return () => unsubsrcibe();
//   }, []);

//   // const handleClick = () => {
//   //   setIsOpen(!isOpen);
//   // };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//         navigate("/error");
//       });
//   };

//   const handleGptSearchClick = () => {
//     dispatch(toggleGptSearchView());
//   };

//   const handleLanguageChange = (e) => {
//     dispatch(changeLanguage(e.target.value));
//   };

//   return (
//     <div className="w-full bg-gradient-to-b from-black flex justify-between items-center absolute z-10 p-1 md:p-4">
//       <Link to="/browse">
//         <div className="w-28 md:w-44">
//           <img src={logo} alt="logo" />
//         </div>
//       </Link>
//       {user && (
//         <div className="flex items-center justify-between">
//           {path === "/gptSearch" && (
//             <div>
//               <select
//                 className="p-1 mr-2 md:p-2 md:mr-4 rounded-md bg-gray-900 text-white hover:bg-slate-700"
//                 onChange={handleLanguageChange}
//               >
//                 {SUPPORTED_LANGUAGES.map((lang) => (
//                   <option key={lang.name} value={lang.identifier}>
//                     {lang.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           {path === "/gptSearch" ? (
//             <Link to="/browse">
//               <div
//                 onClick={handleGptSearchClick}
//                 className=" px-2 py-1 md:px-4 md:py-1 md:mr-2 font-medium text-xs md:text-base bg-green-400 text-black rounded-lg flex cursor-pointer hover:bg-green-500"
//               >
//                 <button>Home</button>
//               </div>
//             </Link>
//           ) : (
//             <Link to="/gptSearch">
//               <div
//                 onClick={handleGptSearchClick}
//                 className=" px-2 py-1 md:px-4 md:py-1 md:mr-2 font-medium text-xs md:text-base bg-green-400 text-black rounded-lg flex cursor-pointer hover:bg-green-500"
//               >
//                 <button>GPT Search</button>
//               </div>
//             </Link>
//           )}

//           <div className="text-sm">
//             <Box>
//               <Tooltip>
//                 <IconButton
//                   onMouseEnter={() => setIsOpen(true)}
//                   onMouseLeave={() => setIsOpen(false)}
//                 >
//                   <Avatar className="" sx={{ width: 30, height: 30 }}>
//                     {user?.displayName?.at(0)}
//                   </Avatar>
//                 </IconButton>
//               </Tooltip>
//             </Box>

//             {isOpen && (
//               <div
//                 onMouseEnter={() => setIsOpen(true)}
//                 onMouseLeave={() => setIsOpen(false)}
//                 className="bg-white md:w-[120px] right-6 absolute rounded-md z-30"
//               >
//                 <Link to="/browse">
//                   <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
//                     <HomeIcon />
//                     Home
//                   </ListItem>
//                 </Link>
//                 <Link to="/favourite">
//                   <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
//                     <FavoriteBorderIcon />
//                     Favourites
//                   </ListItem>
//                 </Link>
//                 <Link to="/watchlist">
//                   <ListItem className="cursor-pointer hover:bg-slate-300 hover:rounded-md">
//                     <BookmarkAddOutlinedIcon />
//                     Watchlist
//                   </ListItem>
//                 </Link>

//                 <ListItem
//                   onClick={handleSignOut}
//                   className="cursor-pointer hover:bg-slate-300 hover:rounded-md"
//                 >
//                   <Logout />
//                   Logout
//                 </ListItem>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


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
  // const path = useSelector((store) => store.path.path);

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
        if (window.location.pathname === '/') {
          navigate("/browse");
        }
      } else {
        // If the user is not authenticated (signed out), dispatch an action to clear user information
        dispatch(removeUser());

        // Redirect the user to the home route ("/")
        navigate("/");
        // User is signed out
        // ...
      }
    });
    handleGptSearchClick();
    // The returned function will be called when the component unmounts
    // It's used to unsubscribe from the onAuthStateChanged observer to prevent memory leaks
    //unsubsribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      toast.success('You have been successfully signed out. Come back soon!');
    }).catch((error) => {
      // An error happened
      navigate("/error");
    });
  }
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
      <Link to='/browse'> {/* Use Link component here */}
      <img
        className='w-44 mx-auto md:mx-0'
        src={logo}
        alt='Netflix Logo'
      />
    </Link>


      {user && (
        <div className='flex p-2 justify-between'>
          {showGptSearch && (
            <select
              className='py-2 px-4 mx-4 my-4 bg-gray-900 text-white rounded-md'
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
          )}
        <button
          onClick={handleGptSearchClick}
          className='py-2 px-4 mx-4 my-4 text-white rounded-md'
          style={containerStyles}
        >
          {(showGptSearch ? "Home Page" : "GPT Search")}
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
                <Link to={"/watchlater"} >
                  <button
                    className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'
                  >
                    WatchLater
                  </button>
                </Link>
                <Link to={"/favourites"} >
                  <button
                    className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'
                  >
                    Favourites
                  </button>
                </Link>
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