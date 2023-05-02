// import { useState } from 'react';
import './App.css';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
// import { UserSettings } from './pages/Settings';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';

export const APP_URL = 'http://localhost:5174';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Landing />} />
				<Route exact path="login" element={<Login />} />
				<Route exact path="signup" element={<Signup />} />
				<Route exact path="home" element={<Home />} />
			</Route>
		)
	);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
