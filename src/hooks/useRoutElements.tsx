import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../modules/home/HomePage";

const useRoutElements = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);

  return routeElements;
};

export default useRoutElements;
