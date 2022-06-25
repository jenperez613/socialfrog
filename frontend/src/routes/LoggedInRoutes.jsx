import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
import {Outlet} from 'react-router-dom';

export default function LoggedInRoutes() {
    const { user } = useSelector((state) => ({ ...state }));
    return user ? <Outlet /> : <Login />;
}