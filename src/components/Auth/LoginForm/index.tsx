'use client';

import React from 'react';

import Login from 'actions/login';

import { Button, Input, ErrorMessage } from 'components';

const LoginForm: Component = () => {
	const [state, action, isPending] = React.useActionState(Login, {
		ok: false,
		error: '',
		data: null,
	});

	React.useEffect(() => {
		if (!state.ok || !state.data) return;

		const redirectPath = state.data?.active ? '/cms' : '/auth/confirmarConta';

		window.location.href = redirectPath;
	}, [state.ok]);

	return (
		<>
			<form action={action} className='space-y-4 mt-4 mb-4'>
				<Input id='email' label='Email' type='email' required />

				<Input id='password' label='Senha' type='password' required />

				<ErrorMessage error={state.error} />

				<Button
					type='submit'
					disabled={isPending}
					label={isPending ? 'Enviando...' : 'Entrar'}
				/>
			</form>
		</>
	);
};

export default LoginForm;
