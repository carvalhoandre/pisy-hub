export type LoginPayload = {
	email: string;
	password: string;
};

export type AuthUser = {
	confirmation_code: boolean;
	cpf: string;
	email: string;
	id: number;
	name: string;
	role: string;
};

export type LoginResponse = {
	access_token: string;
	refresh_token: string;
	user: IAuthUser;
};

export type ConfirmAccountPayload = {
	user_id: number;
	confirmation_code: string;
};

export type RecoverPasswordParams = {
	userId: string;
	password: string;
	token: string;
};
