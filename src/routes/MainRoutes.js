import { Navigate } from "react-router-dom";
import Airdrop from "../pages/airdrop";
import Earn from "../pages/earn";
import Exchange from "../pages/exchange";
import Friends from "../pages/friends";
import Mine from "../pages/mine";

const MainRoutes = {
  path: "/",
  children: [
    {
        path : "/",
        element : <Exchange />
    },
    {
        path:"/exchange",
        element: <Navigate to = "/"/>
    },
    {
        path : "/mine",
        element : <Mine />
    },
    {
        path : "/friends",
        element : <Friends />
    },
    {
        path : "/earn",
        element : <Earn />
    },
    {
        path : "/airdrop",
        element : <Airdrop />
    },
  ],
};


export default MainRoutes;