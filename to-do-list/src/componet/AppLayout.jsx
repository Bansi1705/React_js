import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { AllToDo } from "./AllToDo";
import { Register } from "./Register";
import ToDoDetail from "./ToDoDetail";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },

  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "alltodo",
        element: <AllToDo />,
      },
      {
        path: "tododetail/:id",
        element: <ToDoDetail />,
      },
    ],
  },
]);
