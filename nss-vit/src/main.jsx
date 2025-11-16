import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home, Team, Gallery, Events, Camp, Achievements, Developers } from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "team", element: <Team /> },
      { path: "gallery", element: <Gallery /> },
      { path: "events", element: <Events /> },
      { path: "camp", element: <Camp /> },
      { path: "achievements", element: <Achievements /> },
      { path: "developers", element: <Developers /> },
      { path: "contact", element: <Home /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
