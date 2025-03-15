import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.jsx'
// Elements
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: (
      <div className='bg-blue flex h-28 flex-col justify-content-center w-[30%] align-items-center border-3 rounded-lg'>
        Contact me papi
      </div>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes}/>
    </ThemeProvider>
  </StrictMode>,
)
