import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Routing
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// CSS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

// Components
import App from './components/App';
import { Component3 } from './components/Component3';
import HelloWorld from './components/HelloWorld';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/helloworld" replace /> },
      {
        path: "helloworld",
        element: <HelloWorld />,
      },
      {
        path: "component3",
        element: <Component3 />,
      },
    ],
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
