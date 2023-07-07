import React from 'react';

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
	ListItemButton,
	ListItemIcon,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { AccountBox, DisplaySettings, Logout } from '@mui/icons-material';

export function UserSettings() {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				backgroundColor: '#E06666',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box className="centered-div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Typography color={'white'}>Coming Soon!</Typography>
				{/* <Box sx={{}}>
					<List>
						<ListItemButton sx={{ color: 'white' }}>
							<ListItemIcon sx={{ color: 'white' }}>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary="Account" sx={{ color: 'white' }}></ListItemText>
						</ListItemButton>
						<ListItemButton sx={{ color: 'white' }}>
							<ListItemIcon sx={{ color: 'white' }}>
								<DisplaySettings />
							</ListItemIcon>
							<ListItemText primary="Display" sx={{ color: 'white' }}></ListItemText>
						</ListItemButton>
						<ListItemButton sx={{ color: 'white' }}>
							<ListItemIcon sx={{ color: 'white' }}>
								<Logout />
							</ListItemIcon>
							<ListItemText primary="Logout" sx={{ color: 'white' }}></ListItemText>
						</ListItemButton>
					</List>
				</Box>
				<Divider orientation="vertical" color="white" flexItem sx={{ borderRightWidth: '3px' }} />
				<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									sx={{
										color: 'white',
										'&.Mui-checked': {
											color: 'white',
										},
									}}
								/>
							}
							label="Hello"
							sx={{ color: 'white' }}
						></FormControlLabel>
					</FormGroup>
				</Box>*/}
			</Box>
		</Box>
	);
}
