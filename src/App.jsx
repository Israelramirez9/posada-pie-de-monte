import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Galery from './components/Galery'
import Contact from './components/Contact'
import Reservation from './components/Reservation'
import Services from './components/Services'
import Start from './components/Start'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
      errorElement:<h1>Page not Found, error 404</h1>
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
  ])
  return (
    <>

      <RouterProvider router={router}>
      </RouterProvider>

    </>
  )
}

export default App
