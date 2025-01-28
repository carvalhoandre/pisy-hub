'use server';

import * as Types from './types';

import { postRecoveryPassword } from 'core/services/auth';
import { validateRequiredField } from 'core/helpers/actionsValidations/login';

const handleOnError = (error: string) => ({
	ok: false,
	error,
	data: null,
});

const SendPasswordResetEmail = async (
	_: any,
	formData: FormData
): Promise<Types.SendPasswordResetEmailResponse> => {
	try {
		const email = formData.get('email') as string | null;

		if (!email) return handleOnError('Preencha o email');

		const errorResponse = validateRequiredField(email, 'email');
		if (errorResponse) return errorResponse;

		const { data, message, success } = await postRecoveryPassword(email);

		if (!success) return handleOnError(message || 'Erro ao realizar ação!');

		return {
			ok: true,
			data,
		};
	} catch (error: unknown) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : 'Erro ao realizar ação.',
			data: null,
		};
	}
};

export default SendPasswordResetEmail;
