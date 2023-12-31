import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Galery from './components/Galery'
import Contact from './components/Contact'
import Reservation from './components/Reservation'
import Services from './components/Services'
import Start from './components/Start'


function App() {

  const routes = [
    {
      path: "/",
      element: <Start />,
      errorElement: <h1>Page not Found, error 404</h1>
    },
    {
      path: "/contact",
      element: <Contact />,

    },
    {
      path: "/galery",
      element: <Galery />,

    },
    {
      path: "/services",
      element: <Services />,

    },
    {
      path: "/reservation",
      element: <Reservation />,

    }
  ].map((route) => ({
    ...route,
    path: import.meta.env.BASE_URL + route.path
  }))

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
