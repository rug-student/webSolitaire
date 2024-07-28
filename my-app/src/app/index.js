import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  createBrowserRouter,  RouterProvider} from "react-router-dom"
import routes from 'routes'
import Layout from 'components/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      // specify the routes defined in the
      // routing layer directly
      children: routes
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
