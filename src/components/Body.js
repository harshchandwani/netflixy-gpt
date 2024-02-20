import React from 'react'
import Login from '../pages/Login'
import Browse from '../pages/Browse'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MovieDetail from '../pages/MovieDetail';
import Error from '../pages/Error';
import Watchlist from '../pages/WatchList';
import Favourites from '../pages/Favourites';
import GptSearch from '../pages/GptSearch';
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
      element: <Watchlist />
    },
    {
      path: "favourites",
      element: <Favourites />
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