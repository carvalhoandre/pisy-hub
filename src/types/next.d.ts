import React from 'react';

declare global {
	type Asyncify<T> = {
		[K in keyof T]: Promise<T[K]>;
	};

	type NextPage<Params = {}, SearchParams = {}> = (props: {
		params: Params;
		searchParams: Promise<SearchParams>;
	}) => React.ReactNode | Promise<React.ReactNode>;

	type PasswordResetSearchParams = { key: string; id: string };

	export type ActionResponse<T> = {
		ok: boolean;
		data: T | null;
		error?: string;
	};

	export type PageProps = {
		Home: NextPage;
		Login: NextPage;
		ConfirmAccount: NextPage;
		PasswordReset: NextPage<{}, PasswordResetSearchParams>;
		Cms: NextPage;
	};

	export type PagesName = keyof PageProps;

	export type Page<_PageName extends PagesName> = PageProps[_PageName];
}

export {};
