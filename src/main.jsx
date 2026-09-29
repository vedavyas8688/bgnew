import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import Analytics from './app/Analytics';
import { resolvePage } from './app/resolvePage';
import './styles/index.css';

async function start() {
  const initialPage = await resolvePage(window.location.pathname);
  const app = <BrowserRouter><Analytics /><App initialPage={initialPage} /></BrowserRouter>;
  const root = document.getElementById('root');
  if (root.querySelector('.page-wrapper')) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
start();
