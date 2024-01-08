import {Routes, Route} from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

export default function App() {
    
    const variables = {
        adminPath: 'nbc-admin',
        companyName: 'Nicky Banks Counselling',
        logoFilename: 'logo.png'
    }
    
    return (
            <Routes>
                {/*<Route path={'/nbc-admin'} element={<AdminRoutes variables={variables} />} />*/}
                <Route path={'/*'} element={<AppRoutes />} />
            </Routes>
    )
}
