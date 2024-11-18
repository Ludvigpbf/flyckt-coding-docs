import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import Landing from "@views/Landing";
import About from "@views/About";
import Components from "@views/Components";
import NotFound from "@views/NotFound";
import store from "@redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HelmetProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </HelmetProvider>
      </>
    ),
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      /*   { path: "/contact", element: <Contact /> }, */
      { path: "/components", element: <Components /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
