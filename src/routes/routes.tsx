import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "../pages/Home";
import { Layout } from "../components/layout";

const myRouter = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.home,
                element: <Home />,
            },
            {
                path: ROUTES.login,
                element: <div>Hello World login!</div>,
            },
            {
                path: ROUTES.user,
                element: <div>Hello World user!</div>,
            },
            {
                path: ROUTES.userList,
                element: <div>Hello World userList!</div>,
            },
        ]
    },
]);

export const Routes: React.FC = () => <RouterProvider router={myRouter} />;