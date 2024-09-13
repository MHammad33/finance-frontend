import axios from "axios";
const baseUrl =
	"https://personal-finance-tracker-production.up.railway.app/api/v1/auth";

type LoginUser = {
	email: string;
	password: string;
};

type RegisterUser = {
	email: string;
	username: string;
	password: string;
};

interface LoginResponse {
	token: string;
	username: string;
}

interface RegisterResponse {
	message: string;
}

const login = async (loginCredentials: LoginUser): Promise<LoginResponse> => {
	const response = await axios.post(`${baseUrl}/login`, loginCredentials);
	return response.data;
};

const register = async (
	registerUserCredentials: RegisterUser
): Promise<RegisterResponse> => {
	const response = await axios.post(
		`${baseUrl}/register`,
		registerUserCredentials
	);
	return response.data;
};

export default {
	login,
	register,
};
