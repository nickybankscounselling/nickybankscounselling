import {Routes, Route, Outlet} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CovidPolicy from "./pages/CovidPolicy.jsx";

function AppLayout() {
	return (
			<div>
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
					<Route path={'about'} element={<About />} />
					<Route path={'faq'} element={<FAQ />} />
					<Route path={'contact'} element={<Contact />} />
					
					<Route path={'privacy-policy'} element={<PrivacyPolicy />} />
					<Route path={'covid-policy'} element={<CovidPolicy />} />
				</Route>
			</Routes>
	)
}