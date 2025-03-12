import { createBrowserRouter } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Solutions from "../pages/Solutions/Solutions"
import Contacts from "../pages/Contacts/Contacts"
import Index from "../pages/Index"
import FavIcon from "/assets/logo.png"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      { path: '', element: <Landing />},
      { path: 'solutions', element: <Solutions /> },
      { path: 'contacts', element: <Contacts /> }
    ]
  },
])

export default router