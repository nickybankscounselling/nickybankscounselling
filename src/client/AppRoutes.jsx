import {Routes, Route, Outlet} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Page from "./pages/Page.jsx";
import Services from "./pages/Services.jsx";
import './AppRoutes.css';

function AppLayout() {
	return (
			<div className={'app'}>
				<Navigation />
				<Outlet />
				<Footer />
			</div>
	)
}

export default function AppRoutes() {
	return (
			<Routes>
				<Route path={'/'} element={<AppLayout />} >
					<Route path={''} element={<Home />} />
					<Route path={'services'} element={<Services />} />
					<Route path={'about'} element={<Page id={4} />} />
					<Route path={'faq'} element={<Page id={5} />} />
					<Route path={'contact'} element={<Contact />} />
					
					<Route path={'counselling-room'} element={<Page id={6} />} />
					
					<Route path={'privacy-policy'} element={<Page id={8} />} />
					<Route path={'covid-policy'} element={<Page id={7} />} />
				</Route>
			</Routes>
	)
}