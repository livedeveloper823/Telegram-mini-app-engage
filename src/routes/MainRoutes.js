import { Navigate } from "react-router-dom";
import Airdrop from "../pages/airdrop";
import Earn from "../pages/earn";
import Home from "../pages/home";
import Friends from "../pages/friends";
import Mine from "../pages/earncash";

const MainRoutes = {
  path: "/",
  children: [
    {
        path : "/",
        element : <Home />
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