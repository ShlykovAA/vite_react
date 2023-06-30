import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "../pages/Home";
import { Layout } from "../components/layout";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "./protected-route";

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
                element: <Login />,
            },
            {
                path: ROUTES.user,
                element: (
                    <ProtectedRoute>
                        <div>Hello World user!</div>
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.userList,
                element: (
                    <ProtectedRoute>
                        <div>Hello World userList!</div>,
                    </ProtectedRoute>
                ),
            },
        ]
    },
]);

export const Routes: React.FC = () => <RouterProvider router={myRouter} />;