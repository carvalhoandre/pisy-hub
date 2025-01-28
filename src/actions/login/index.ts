'use server';

import { LoginResponse } from './types';

import { postLogin } from 'core/services/auth';
import { validateRequiredField } from 'core/helpers/actionsValidations/login';
import { setCookiesStore } from 'core/helpers/cookies/store';

const Login = async (_: any, formData: FormData): Promise<LoginResponse> => {
	try {
		const email = formData.get('email') as string | null;
		const password = formData.get('password') as string | null;

		const validations = [
			{ field: email, name: 'email' },
			{ field: password, name: 'senha' },
		];

		for (const { field, name } of validations) {
			const errorResponse = validateRequiredField(field, name);
			if (errorResponse) return errorResponse;
		}

		const { data, message, success } = await postLogin({
			email: email!,
			password: password!,
		});

		if (!success) {
			return {
				ok: false,
				error: message || 'Usuário ou senha incorretos!',
				data: null,
			};
		}

		setCookiesStore(data.access_token);

		return {
			ok: true,
			data: data.user,
		};
	} catch (error: unknown) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : 'Erro ao realizar ação.',
			data: null,
		};
	}
};

export default Login;
