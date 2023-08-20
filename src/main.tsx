import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCreator from './pages/AddCreator.tsx'
import EditCreator from './pages/EditCreator.tsx'
import ShowCreators from './pages/ShowCreators.tsx'
import ViewCreator from './pages/ViewCreator.tsx'
import App from './App.tsx'
import './index.css'
import '@picocss/pico'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators />,
  },
  {
    path: "/add",
    element: <AddCreator />,
  },
  {
    path: "/edit/:creatorId",
    element: <EditCreator />,
  },
  {
    path: "/view/:creatorId",
    element: <ViewCreator />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
