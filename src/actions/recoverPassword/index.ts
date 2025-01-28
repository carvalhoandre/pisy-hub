'use server';

import * as Types from './types';
import { RecoverPasswordParams } from 'types/services/auth';

import { putResetPassword } from 'core/services/auth';

const RecoverPassword = async ({
	password,
	userId,
	token,
}: RecoverPasswordParams): Promise<Types.RecoverPasswordResponse> => {
	try {
		const { data, message, success } = await putResetPassword({
			userId,
			password,
			token,
		});

		console.log('DATA', data, message, success);

		if (!success) {
			return {
				ok: false,
				error: message || 'Erro ao realizar ação!',
				data: null,
			};
		}

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

export default RecoverPassword;
