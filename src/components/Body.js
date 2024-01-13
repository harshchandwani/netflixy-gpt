import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import Error from './Error';
import Watchlist from './WatchList';
const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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