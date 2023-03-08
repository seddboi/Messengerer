import React from 'react';

import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Blobs, Dots } from '../assets/svgcomponents';

export function Landing() {
	// const navigate = useNavigate();
	return (
		<Box>
			<AppBar sx={{ backgroundColor: 'rgb(236, 163, 163, 0.8)' }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Link id="remove-link-effect" to="Signup">
						Get Started
					</Link>
				</Toolbar>
			</AppBar>

			<Box sx={{ width: '100%', minHeight: { xs: '55px', sm: '64px', md: '64px' }, zIndex: 2 }}></Box>

			<Box
				id="background-image"
				sx={{
					width: '100%',
					height: '90vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1,
					marginBottom: '40vh',
				}}
			>
				<Typography
					variant="h1"
					sx={{ color: '#eca3a3', textShadow: '0 0 1px #d49292, 0 0 2px #d49292, 0 0 3px #d49292, 0 0 8px #555' }}
				>
					Messengerer
				</Typography>
				<Typography variant="h4" sx={{ color: '#eca3a3', textShadow: '0 0 5px #555' }}>
					The wannabe next best messenger application.
				</Typography>
			</Box>

			<Box>
				<Box id="dots-svg" sx={{ width: '100vw', zIndex: 1 }}>
					<Dots />
				</Box>
			</Box>
		</Box>
	);
}
