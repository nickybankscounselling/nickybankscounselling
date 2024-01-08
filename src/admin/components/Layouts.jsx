import {Outlet} from "react-router-dom";
import "./../styles.css";
import {Login} from "../pages/Login";
import {DashboardSidebar} from "./DashboardSidebar";

export const DashboardLayout = ({ handleLogin, handleLogout, cookies, variables }) => {
	if ( cookies ) {
		return (
				<div className={'admin'}>
					<DashboardSidebar logout={handleLogout} cookies={ cookies } variables={ variables } />
					
					<div className={'outlet dashboard-outlet'}>
						<Outlet/>
						<div className={'footer'}>
							Copyright © Georgina Banks {new Date().getFullYear()}
						</div>
					</div>
				</div>
		)
	} else {
		return <Login handleLogin={ handleLogin } />
	}
}

export const EditLayout = ({ cookies, handleLogin }) => {
	if ( cookies ) {
		return (
				<div className={'admin'}>
					<div className={'outlet'}>
						<Outlet/>
						<div className={'footer'}>
							Copyright © Georgina Banks {new Date().getFullYear()}
						</div>
					</div>
				</div>
		)
	} else {
		return <Login handleLogin={ handleLogin } />
	}
}