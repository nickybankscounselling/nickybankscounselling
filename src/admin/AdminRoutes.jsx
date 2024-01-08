import {Navigate, Route, Routes} from "react-router-dom";
import {useCookies} from "react-cookie";
import {getUsers} from "./api";
import {DashboardLayout, EditLayout} from "./components/Layouts";
import {Dashboard} from "./pages/Dashboard";
import {Pages} from "./pages/Pages";
import {Posts} from "./pages/Posts";
import {Images} from "./pages/Images";
import {Testimonials} from "./pages/Testimonials";
import {Users} from "./pages/Users";
import {Settings} from "./pages/Settings";
import {EditPage} from "./pages/editing/EditPage";
import {EditPost} from "./pages/editing/EditPost";
import {Upload} from "./pages/editing/Upload";
import {EditImage} from "./pages/editing/EditImage";
import {EditTestimonial} from "./pages/editing/EditTestimonial";
import {EditUser} from "./pages/editing/EditUser";
import {Login} from "./pages/Login.jsx";

export function AdminRoutes({ variables }) {
	
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
	
	
	// Routes
	
	return (
			<Routes>
				<Route path={'/*'} element={<DashboardLayout handleLogin={handleLogin} handleLogout={handleLogout}
																   cookies={cookies.user} variables={variables} />} >
					<Route path={''} element={<Dashboard cookies={cookies.user} variables={variables} />}/>
					<Route path={'pages'} element={<Pages variables={variables} />}/>
					<Route path={'posts'} element={<Posts variables={variables} />}/>
					<Route path={'images'} element={<Images variables={variables} />}/>
					<Route path={'testimonials'} element={<Testimonials variables={variables} />}/>
					<Route path={'users'} element={<Users cookies={cookies.user} variables={variables} />}/>
					<Route path={'settings'} element={<Settings cookies={cookies.user} updateUser={handleLogin} />}/>
				</Route>
				
				<Route path={'/*'} element={<EditLayout handleLogin={handleLogin} cookies={cookies.user}/>}>
					<Route path={'pages/:pageId/edit'} element={<EditPage showDelete={true} cookies={cookies.user} variables={variables} />}/>
					<Route path={'pages/new'} element={<EditPage showDelete={false} cookies={cookies.user} variables={variables} />}/>
				
					<Route path={'posts/:postId/edit'} element={<EditPost showDelete={true} cookies={cookies.user} variables={variables} />}/>
					<Route path={'posts/new'} element={<EditPost showDelete={false} cookies={cookies.user} variables={variables} />}/>
				
					<Route path={'images/upload'} element={<Upload />}/>
					<Route path={'images/:imageId/edit'} element={<EditImage variables={variables} />}/>
				
					<Route path={'testimonials/:testimonialId/edit'} element={<EditTestimonial showDelete={true} variables={variables} />}/>
					<Route path={'testimonials/new'} element={<EditTestimonial showDelete={false} variables={variables} />}/>
				
					<Route path={'users/new'} element={<EditUser variables={variables} />}/>
					<Route path={'users/:username/edit'} element={<EditUser variables={variables} />}/>
				</Route>
				
				<Route path={'/login'} element={<Login handleLogin={ handleLogin } variables={variables} />} />
			</Routes>
	)
}