import {Navigate, Routes, Route} from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "./admin/pages/Login";
import {getUsers} from "./admin/api.jsx";
import AdminRoutes from "./admin/AdminRoutes.jsx";
import ErrorPage from "./admin/ErrorPage.jsx";
import AppRoutes from "./AppRoutes.jsx";

export default function App() {
    
    // Login State
    
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    
    function addHours (dt, h){
        const d = new Date(dt);
        d.setHours(d.getHours() + h);
        return d;
    }
    
    async function handleLogin( username ) {
        const user = await getUsers( username );
        
        setCookie("user", {
            ...user[0],
            expires: addHours(new Date(), 4)
        }, {
            path: "/",
            maxAge: 4 * 60 * 60
        });
    }
    
    function handleLogout() {
        removeCookie("user", { path: '/' });
        return <Navigate to='/' replace state={{path: location.pathname}}/>
    }
    
    function timeout() {
        if (new Date(cookies.user.expires) < new Date()) {
            handleLogout()
        }
    }
    
    if (cookies.user) {
        setTimeout(timeout, 1000 * 60 * 15);
    }
    
    return (
            <Routes>
                <Route path={'/admin//*'} element={<AdminRoutes cookies={ cookies } handleLogin={ handleLogin } handleLogout={ handleLogout} />} />
                <Route path={'/admin/login'} element={<Login handleLogin={ handleLogin } />} />
                
                <Route path={'/*'} element={<AppRoutes />} />
                
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
    )
}
