import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
import Integrantes from "../pages/Integrantes"

export const routes = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/sobre",
                element: <Sobre />
            },
            {
                path: "/contato",
                element: <Contato />
            },
            {
                path: "/integrantes",
                element: <Integrantes />
            }
        ]
    }
])