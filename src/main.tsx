import React from "react";
import ReactDOM from "react-dom/client";
import { Landing, Search, Library, Profile, Login, Error, Hub } from "./pages";
import { UserContextProvider } from "./contexts/UserContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/index.css";
import avatarTheme from "./styles/chakra/theme";
import "@fontsource/alfa-slab-one";
import "@fontsource/libre-franklin/300.css";
import "@fontsource/libre-franklin/400.css";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/700.css";

const theme = extendTheme({
  colors: {
    red: {
      400: "#DA322C",
      700: "#6D1B17",
      900: "#4D0C08",
    },
    green: {
      400: "#1CC601",
    },
  },
  components: { Avatar: avatarTheme },
  fonts: {
    alfaSlab: `'Alfa Slab One', sans-serif`,
    libreFranklin: `'Libre Franklin', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: "/library",
    element: <Library />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/hub",
    element: <Hub />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>
);
