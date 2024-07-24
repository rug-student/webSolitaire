// ./src/routes/index.js

import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("features/homePage"))
// other page components...
const Solitaire = React.lazy(() => import("features/solitaire"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    // other mappings ...
    { path: PathConstants.SOLITAIRE, element: <Solitaire /> },
]

export default routes