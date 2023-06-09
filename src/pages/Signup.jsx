import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Box, Typography, InputBase, ButtonBase, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { APP_URL } from '../App';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function Signup() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [signupError, setSignupError] = useState(false);
	const [signupErrorMessage, setSignupErrorMessage] = useState('');

	const navigate = useNavigate();

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSignup = async () => {
		if (username.length <= 0 || email.length <= 0 || password.length <= 0) {
			setSignupErrorMessage('Please fill out all fields.');
		} else {
			await Axios.post(APP_URL + '/signup', {
				username: username,
				password: password,
				email: email,
			}).then((res) => {
				console.log(res.data);
				if (res.data.auth) {
					sessionStorage.setItem('aT', res.data.token);
					sessionStorage.setItem('loginStatus', res.data.auth);
					sessionStorage.setItem('userInfo', JSON.stringify(res.data.result));
					navigate('/home');
					// dispatch(updateUserInfo(res.data));
				} else {
					setSignupErrorMessage(res.data.message);
					setSignupError(true);
				}
			});
		}
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, height: '100vh', minHeight: '700px' }}>
			<Box
				className="left-half"
				sx={{
					height: { xs: '40%', sm: '40%', md: '100vh' },
					width: { xs: '100%', sm: '100%', md: '80%' },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h3" sx={{ color: 'white', textShadow: '0 0 1px #888, 0 0 2px #888, 0 0 2px #888' }}>
					Messengerer
				</Typography>
				<Typography variant="body1" sx={{ color: 'white', textShadow: '0 0 1px #888, 0 0 2px #888, 0 0 2px #888' }}>
					Use it. Or don't. Thats okay too.
				</Typography>
			</Box>

			<Box
				className="right-half"
				sx={{
					height: { xs: '60%', sm: '60%', md: '100vh' },
					width: { xs: '100%', sm: '100%', md: '120%' },
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						backgroundColor: '#f3c7c7',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',

						p: { xs: 0, sm: 0, md: 5 },
						pr: { xs: 5, sm: 5, md: 5 },
						pl: { xs: 5, sm: 5, md: 5 },
						borderRadius: '4px',
						width: { xs: '100%', sm: '100%', md: 'auto' },
						height: { xs: '100%', sm: '100%', md: 'auto' },
					}}
				>
					{/* <form onSubmit={() => {}}> */}
					<Typography variant="h3" sx={{ color: 'white' }}>
						Signup
					</Typography>
					<InputBase
						placeholder="Username"
						autoComplete="username"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						sx={{
							backgroundColor: 'white',
							color: '#eca3a3',
							border: '1px dashed #f3c7c7',
							borderRadius: '4px',
							mt: 2,
							mb: 2,
							p: 1,
						}}
					/>
					<InputBase
						placeholder="Email"
						autoComplete="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						error={signupError}
						sx={{
							backgroundColor: 'white',
							color: '#eca3a3',
							border: '1px dashed #f3c7c7',
							borderRadius: '4px',
							mt: 2,
							mb: 2,
							p: 1,
						}}
					/>
					<InputBase
						placeholder="Password"
						type={showPassword ? 'text' : 'password'}
						autoComplete="new-password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						endAdornment={
							<InputAdornment>
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => {
										handleShowPassword();
									}}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						sx={{
							backgroundColor: 'white',
							color: '#eca3a3',
							border: '1px dashed #f3c7c7',
							borderRadius: '4px',
							mt: 2,
							mb: 2,
							p: 1,
						}}
					/>
					<ButtonBase
						onClick={() => {
							handleSignup();

							setUsername('');
							setEmail('');
							setPassword('');
						}}
						sx={{
							color: 'white',
							backgroundColor: '#f1bebe',
							border: '1px dashed white',
							borderRadius: '4px',
							p: 1,
							fontSize: '17px',
						}}
					>
						Submit
					</ButtonBase>
					{/* make this a conditional that checks for already used username and/or email prior to signup */}
					<Typography sx={{ color: 'red', mt: 2, mb: 1 }}>{signupErrorMessage}</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<Link id="remove-link-effect" to="/login">
							Already a user?
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
