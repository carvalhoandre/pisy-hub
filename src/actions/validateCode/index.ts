'use server';

import * as Types from './types';

import { postConfirmAccount } from 'core/services/auth';
import { validateRequiredField } from 'core/helpers/actionsValidations/login';

const ValidateCode = async (
	_: any,
	formData: FormData
): Promise<Types.ValidateCodeResponse> => {
	try {
		const token = formData.get('token') as string | null;
		const errorResponse = validateRequiredField(token, 'token');

		if (errorResponse) return errorResponse;

		const { data, message, success } = await postConfirmAccount({
			confirmation_code: token!,
			user_id: 1,
		});

		if (!success) {
			return {
				ok: false,
				error: message || 'Erro ao confirmar conta!',
				data: null,
			};
		}

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

export default ValidateCode;
