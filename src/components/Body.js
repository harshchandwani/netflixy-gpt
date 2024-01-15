import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import Error from './Error';
import Watchlist from './WatchList';
import Favourites from './Favourites';
import GptSearch from './GptSearch';
const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/gptSearch",
      element: <GptSearch />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetail />
    },
    {
      path: "watchlater",
      element: <Watchlist/>
    },
    {
      path: "favourites",
      element : <Favourites />
    },
    {
      path: "*",
      element: <Error />
    }
  ]
  );

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;