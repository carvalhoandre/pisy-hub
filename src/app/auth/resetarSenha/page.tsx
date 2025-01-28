import React from 'react';

import Title from 'components/Title';
import RecoverPassword from 'components/Auth/RecoverPassword';

const PasswordResetPage: Page<'PasswordReset'> = async ({ searchParams }) => {
	const { id, key } = await searchParams;

	const isNotAccredited = !id || !key;

	return (
		<>
			<Title text='Resetar Senha' className='!text-[2rem] mb-8' />

			<RecoverPassword
				isNotAccredited={isNotAccredited}
				userId={id}
				token={key}
			/>
		</>
	);
};

export default PasswordResetPage;
