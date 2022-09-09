import React from 'react';
import { Box, Typography } from '@mui/material';
import { HeaderProps } from './types';


function Header({children}:HeaderProps) {
	return (
		<Box component="header" p={2} display="flex" justifyContent="center" >
			{children || <Typography variant='h2' fontWeight="bold" >퀴즈를 풀어보아요</Typography>}
		</Box>
	);
}

export default Header;
