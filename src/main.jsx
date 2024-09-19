import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import { ReduxStore } from "./store/ReduxStore.js";
import { Provider } from "react-redux";

// console.log("redux", ReduxStore);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={ReduxStore}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
