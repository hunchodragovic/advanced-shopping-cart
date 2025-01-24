import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartContext"; // Import the provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartProvider> {/* Wrap the App with the provider */}
      <Router>
        <App />
      </Router>
    </ShoppingCartProvider>
  </StrictMode>
);
