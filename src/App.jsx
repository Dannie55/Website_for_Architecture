import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Gallery from './routes/Gallery'
import Project from './routes/Project'
import NotFound from './routes/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Gallery',
        element: <Gallery />,
      },
      {
        path: '/Project',
        element: <Project />,
      },
      {
        path: '/NotFound',
        element: <NotFound />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
export default App
