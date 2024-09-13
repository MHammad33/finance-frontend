import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface AuthState {
	isLoggedIn: boolean;
	isLoading: boolean;
	user: null | {
		username: string;
	};
	token: string | null;
}

const getDataFromLocalStorage = (key: string) => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
};

const initialState: AuthState = {
	isLoggedIn: Boolean(getDataFromLocalStorage("token")),
	isLoading: false,
	user: getDataFromLocalStorage("user"),
	token: getDataFromLocalStorage("token"),
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart(state) {
			state.isLoading = true;
		},
		loginSuccess(
			state,
			action: PayloadAction<{ token: string; username: string }>
		) {
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = { username: action.payload.username };
			state.token = action.payload.token;
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			localStorage.setItem(
				"user",
				JSON.stringify({ username: action.payload.username })
			);
		},
		loginFailure(state) {
			state.isLoading = false;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
			state.token = null;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	authSlice.actions;

export const useAuth = () => useSelector((state: RootState) => state.auth);

export default authSlice.reducer;
