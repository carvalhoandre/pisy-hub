import React from 'react';

const Check: Component = ({ className }) => {
	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 10 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M3.57994 7.5801C3.37994 7.5801 3.18994 7.5001 3.04994 7.3601L0.219941 4.5301C-0.0700586 4.2401 -0.0700586 3.7601 0.219941 3.4701C0.509941 3.1801 0.989941 3.1801 1.27994 3.4701L3.57994 5.7701L8.71994 0.630098C9.00994 0.340098 9.48994 0.340098 9.77994 0.630098C10.0699 0.920098 10.0699 1.4001 9.77994 1.6901L4.10994 7.3601C3.96994 7.5001 3.77994 7.5801 3.57994 7.5801Z'
				fill='currentColor'
			/>
		</svg>
	);
};

export default Check;