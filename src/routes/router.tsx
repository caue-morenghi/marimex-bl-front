import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { MenuLateral } from "../layout/menu-lateral/MenuLateral";
import { Usuarios } from "../pages/Usuarios";
import { ConciliacaoBLs } from "../pages/ConciliacaoBLs";
import DetailPage from "./DetailPage"; // Certifique-se de importar o componente DetailPage
import ConciliacaoBL from "../components/conciliacao-bls/ConciliacaoBL";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MenuLateral />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/conciliacaobls',
                        element: <ConciliacaoBLs />
                    },
                    {
                        path: '/usuarios',
                        element: <Usuarios />
                    },
                    {
                        path: '/details/:id',
                        element: <ConciliacaoBL />
                    }
                ]
            }
        ]
    }
]);