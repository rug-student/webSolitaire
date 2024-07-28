import React from 'react';

import {  createBrowserRouter,  RouterProvider} from "react-router-dom"
import routes from 'src/routes'
import Layout from 'src/components/Layout'

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
