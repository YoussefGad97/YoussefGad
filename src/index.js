import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// Get the root element from public/index.html
const rootElement = document.getElementById('root');

// Create a React root and render the App component
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
