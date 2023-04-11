import React from 'react';

import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Stars, HappyEmoji, ConfusedEmoji, MortyEmoji, Envelope, PhoneEmoji, MessageBubbles } from '../assets/svgcomponents';

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

			{/* <Box sx={{ width: '100%', minHeight: { xs: '55px', sm: '64px', md: '64px' }, zIndex: 2 }}></Box> */}

			<Box
				className="main-text"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: '100vh',
					backgroundColor: '#e37575',
					overflowY: 'hidden',
				}}
			>
				<Box className="stars" sx={{ position: 'absolute', zIndex: 1, width: '100vw', overflowX: 'hidden' }}>
					<Stars id="star" />
				</Box>

				<Box className="main-emoji-positive" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="first-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<Envelope />
					</Box>
				</Box>

				<Box className="main-emoji-negative" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="first-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<HappyEmoji />
					</Box>
				</Box>

				<Box className="main-emoji-positive" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="second-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<MortyEmoji />
					</Box>
				</Box>

				<Box className="main-emoji-negative" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="second-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<PhoneEmoji />
					</Box>
				</Box>

				<Box className="main-emoji-positive" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="third-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<MessageBubbles />
					</Box>
				</Box>

				<Box className="main-emoji-negative" sx={{ position: 'fixed', height: '100%' }}>
					<Box
						className="main-emoji"
						id="third-set"
						sx={{ position: 'fixed', zIndex: 1, width: { xs: '10vw', sm: '8vw', md: '4vw' }, left: '-10vw' }}
					>
						<ConfusedEmoji />
					</Box>
				</Box>

				<Typography
					variant="h1"
					sx={{
						color: '#f2c1c1',
						fontSize: '10vw',
						textShadow: '0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 8px white',
						zIndex: 2,
					}}
				>
					Messengerer
				</Typography>
				<Typography variant="h4" sx={{ color: '#f2c1c1', textShadow: '0 0 2px white, 0 0 3px white', zIndex: 2 }}>
					The wannabe next best messaging application.
				</Typography>
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '30vh',
					background: 'linear-gradient(180deg, rgba(227,117,117,1) 0%, rgba(239,178,178,1) 100%)',
				}}
			></Box>

			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#efb2b2' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '50vw',
						height: 'auto',
						color: '#f2c1c1',
						backgroundColor: '#e37575',
						borderRadius: '5px',
						boxShadow: '4px 7px 9px #666',
						padding: '3em',
						position: 'absolute',
						zIndex: 2,
					}}
				>
					<Typography
						variant="h4"
						sx={{
							mb: 5,
							fontSize: { xs: '8vw', sm: '7vw', md: '5vw' },
							textShadow: '0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 8px white',
						}}
					>
						Why use it?
					</Typography>
					<Typography
						variant="body1"
						sx={{
							maxWidth: { sm: '50vw', md: '35vw' },
							fontSize: '16px',
							textAlign: 'justify',
							textJustify: 'inter-character',
							mb: 1,
						}}
					>
						This chat service was built by a solo developer, to be a simple and straight-forward messaging program. There are many
						options out there that are overly complicated, confusing or just flat out poorly managed. This product aims to solve
						that by making it as straightforward as can be. It's also completely free.
					</Typography>
					<Typography
						variant="body1"
						sx={{
							maxWidth: { sm: '50vw', md: '35vw' },
							fontSize: '16px',
							textAlign: 'justify',
							textJustify: 'inter-character',
						}}
					>
						And you will hurt the developer's feelings if you don't.{' '}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
