// import { useState } from 'react';
import './App.css';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';

import { PrivateRoutes } from './utils/privateroutes';
// import { UserSettings } from './pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const APP_URL = 'http://localhost:5174';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route exact path="/home" element={<Home />} />
					</Route>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route index path="/" element={<Landing />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
