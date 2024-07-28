// ./src/routes/index.js

import React from 'react'
import PathConstants from './pathConstants'

// page components...
const Home = React.lazy(() => import('src/features/homePage'))
const Solitaire = React.lazy(() => import('src/features/solitaire'))

const routes = [
    //  page to path mappings
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.SOLITAIRE, element: <Solitaire /> },
]

export default routes