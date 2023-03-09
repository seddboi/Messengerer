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
				}}
			>
				<Typography
					variant="h1"
					sx={{ color: 'white', fontSize: '10vw', textShadow: '0 0 1px #555, 0 0 2px #555, 0 0 3px #555, 0 0 8px #555' }}
				>
					Messengerer
				</Typography>
				<Typography variant="h4" sx={{ color: 'white', textShadow: '0 0 5px #555' }}>
					The wannabe next best messenger application.
				</Typography>
			</Box>

			<Box sx={{ width: '100%', height: '50vh' }}></Box>

			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '50vw',
						height: 'auto',
						color: 'white',
						backgroundColor: 'rgb(141, 97, 97, 0.4)',
						borderRadius: '5px',
						padding: '3em',
						position: 'absolute',
						zIndex: 2,
					}}
				>
					<Typography variant="h4" sx={{ mb: 5, fontSize: { xs: '8vw', sm: '7vw', md: '5vw' } }}>
						Why use it?
					</Typography>
					<Typography
						variant="body1"
						sx={{
							maxWidth: { sm: '50vw', md: '35vw' },
							fontSize: '16px',
							textAlign: { xs: 'none', sm: 'justify', md: 'justify' },
							textJustify: 'inter-character',
						}}
					>
						This chat service was built by a solo developer, to be a simple and straight-forward messaging program. There are many
						options out there that are overly complicated, confusing or just flat out poorly managed. This product aims to solve
						that by making it as straightforward as can be. It's also completely free.
					</Typography>
				</Box>
				<Box id="dots-svg" sx={{ width: '100vw', zIndex: 1 }}>
					<Dots />
				</Box>
			</Box>
		</Box>
	);
}
