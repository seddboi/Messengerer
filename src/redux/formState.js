import { createSlice } from '@reduxjs/toolkit';

export const formInfoSlice = createSlice({
	name: 'formInfoState',
	initialState: {
		username: '',
		password: '',
		email: '',
	},
	reducers: {
		updateUsername: (state, action) => {
			state.username = action.payload;
		},
		updatePassword: (state, action) => {
			state.password = action.payload;
		},
		updateEmail: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const { updateUsername, updatePassword, updateEmail } = formInfoSlice.actions;

export default formInfoSlice.reducer;
