import { configureStore } from '@reduxjs/toolkit';
import formInfoReducer from './formState';

export default configureStore({
	reducer: {
		formInfoState: formInfoReducer,
	},
});
