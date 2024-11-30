import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Create the root of the app using the React 18 API
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/muto-electric-website'>
      <Routes>
        <Route path="*" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);