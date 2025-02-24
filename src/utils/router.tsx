import { createBrowserRouter } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Solutions from "../pages/Solutions/Solutions"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/solutions',
    element: <Solutions />
  }
])

export default router