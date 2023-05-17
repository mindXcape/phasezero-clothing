import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { WrappedApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <WrappedApp />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
