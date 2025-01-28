'use client';

import React from 'react';

import classNames from 'classnames';

import sendPasswordResetEmail from 'actions/sendPasswordResetEmail';

import Input from 'components/Input';
import Button from 'components/Button';
import NewPassword from 'components/NewPassword';
import ErrorMessage from 'components/ErrorMessage';

import * as Types from './types';

const RecoverPassword: Component<Types.RecoverPasswordProps> = ({
	userId,
	token,
	isNotAccredited,
}) => {
	const [state, sendPasswordResetEmailAction, isPending] = React.useActionState(
		sendPasswordResetEmail,
		{
			ok: false,
			error: '',
			data: null,
		}
	);

	const containerClassName = classNames('flex flex-col gap-4');

	if (!isNotAccredited) return <NewPassword userId={userId} token={token} />;

	return (
		<form action={sendPasswordResetEmailAction} className={containerClassName}>
			<p>
				Para resetar sua senha nos informe qual o seu e-mail para enviarmos o
				link de confirmação.
			</p>

			<div className='gap-2 flex-1'>
				<Input id='email' label='E-mail' />

				<ErrorMessage error={state.error} />
			</div>

			<Button
				type='submit'
				disabled={isPending}
				label={isPending ? 'Enviando...' : 'Enviar'}
			/>
		</form>
	);
};

export default RecoverPassword;
