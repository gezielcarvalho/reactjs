import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import './index.css';
import Second from './pages/Second';
import Landing from './pages/Landing';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
