'use server';

import { getHoursInSeconds } from 'core/utils/time';

const ONE_DAY_IN_HOURS = 24;

import { cookies } from 'next/headers';

export const setCookiesStore = async (token: string) => {
	const cookiesStore = await cookies();
	cookiesStore.set('token', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		maxAge: getHoursInSeconds(ONE_DAY_IN_HOURS),
	});
};
