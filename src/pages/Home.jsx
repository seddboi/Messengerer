import React, { useEffect } from 'react';

import {
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Divider,
	Button,
	Typography,
	InputBase,
	ButtonBase,
	Avatar,
	IconButton,
	InputAdornment,
} from '@mui/material';
import { Send, AddAPhoto, AttachFile, Settings, Logout } from '@mui/icons-material';

import { Link, useNavigate } from 'react-router-dom';

export function Home() {
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.clear();
		sessionStorage.setItem('loginStatus', 'false');
		navigate('/login');
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, transition: 'none' }}>
			<Box
				className="left-home"
				sx={{
					backgroundColor: '#E06666',
					width: '100%',
					maxWidth: { xs: '100%', sm: '100%', md: '300px' },
					display: 'flex',
					flexDirection: { xs: 'row', sm: 'row', md: 'column' },
				}}
			>
				<List sx={{ flexGrow: 1 }}>{/* map out previous conversations */}</List>
			</Box>

			<Box className="right-home" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Box className="conversation-title" sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: '0px 2px 4px #999' }}>
					<Avatar sx={{ height: '80px', width: '80px' }}></Avatar>
					<Typography variant="h4" sx={{ pl: 4, color: '#E06666', flexGrow: 1, textAlign: 'left' }}>
						Name
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<IconButton
							onClick={handleLogout}
							sx={{
								fontSize: 'large',
								backgroundColor: '#E06666',
								color: 'white',
								height: '40px',
								width: '40px',
								m: { xs: '5px', sm: '5px', md: 2 },
							}}
						>
							<Logout />
						</IconButton>
						<IconButton
							onClick={() => {
								navigate('/settings');
							}}
							sx={{
								fontSize: 'large',
								backgroundColor: '#E06666',
								color: 'white',
								height: '40px',
								width: '40px',
								m: { xs: '5px', sm: '5px', md: 2 },
							}}
						>
							<Settings />
						</IconButton>
					</Box>
				</Box>
				<Box sx={{ flexGrow: 1, height: '100%' }}>{/* message convo goes in here */}</Box>
				<Box sx={{ boxShadow: '0 -2px 4px #999' }}>
					<Box sx={{ display: 'flex', padding: '20px 10px 20px 5px' }}>
						<IconButton sx={{ color: '#E06666', '&:hover': { backgroundColor: 'transparent' } }}>
							<AddAPhoto />
						</IconButton>
						<IconButton sx={{ color: '#E06666', '&:hover': { backgroundColor: 'transparent' } }}>
							<AttachFile />
						</IconButton>
						<InputBase
							placeholder="Messengerer"
							endAdornment={
								<InputAdornment>
									<IconButton sx={{ color: '#E06666', '&:hover': { backgroundColor: 'transparent' } }}>
										<Send />
									</IconButton>
								</InputAdornment>
							}
							sx={{
								width: '100%',
								flexGrow: 1,
								border: '1px solid #E06666',
								borderRadius: '30px',
								color: '#E06666',
								pl: 2,
								pr: 1,
							}}
						></InputBase>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
