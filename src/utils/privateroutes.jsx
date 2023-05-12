import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
	const loginStatus = sessionStorage.getItem('loginStatus') || false;
	const aT = sessionStorage.getItem('aT');

	return loginStatus && aT !== null ? <Outlet /> : <Navigate to="/login" />;
};
