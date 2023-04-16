import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tools from './pages/Tools';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'sobre',
        element: <About/>
      },
      {
        path: 'contato',
        element: <Contact/>
      },
      {
        path: 'projetos',
        element: <Projects/>
      },
      {
        path: 'tecnologias',
        element: <Tools/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
