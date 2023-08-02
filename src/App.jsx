import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Claims from './components/Claims'
import Galery from './components/Galery'
import Contact from './components/Contact'
import Reservation from './components/Reservation'
import Services from './components/Services'
import Start from './components/Start'
import Map from './components/Map'

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
      path: "/map",
      element: <Map/>,

    },
    {
      path: "/galery",
      element: <Galery />,

    },
    {
      path: "/claims",
      element: <Claims />,

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
