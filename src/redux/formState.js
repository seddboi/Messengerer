import { createSlice } from '@reduxjs/toolkit';

export const formInfoSlice = createSlice({
	name: 'formInfoState',
	initialState: {
		userInfo: {},
	},
	reducers: {
		updateUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},
	},
});

export const { updateUsername, updatePassword, updateEmail, updateUserInfo } = formInfoSlice.actions;

export default formInfoSlice.reducer;
