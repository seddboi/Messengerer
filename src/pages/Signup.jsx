import React from 'react';

import { Grid, Box, Button, Typography, TextField, InputBase, ButtonBase } from '@mui/material';

export function Signup() {
	return (
		<Grid container sx={{ height: '100%' }}>
			<Grid item sm={6} md={6} lg={5}>
				<Box
					className="left-half"
					sx={{
						height: '100vh',
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
			</Grid>
			<Grid item sm={6} md={6} lg={7}>
				<Box
					className="right-half"
					sx={{
						height: '100vh',
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
							p: 5,
							borderRadius: '4px',
						}}
					>
						{/* <form onSubmit={() => {}}> */}
						<Typography variant="h3" sx={{ color: 'white' }}>
							Signup
						</Typography>
						<InputBase
							placeholder="Username"
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
							sx={{ color: 'white', backgroundColor: '#f1bebe', border: '1px dashed white', borderRadius: '4px', p: 1 }}
						>
							Submit
						</ButtonBase>
						{/* make this a conditional that checks for already used username and/or email prior to signup */}
						<Typography sx={{ color: 'red', mt: 2, mb: 1 }}>** Error Message goes here **</Typography>
						{/* </form> */}
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}
