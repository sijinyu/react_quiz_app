import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

interface Props extends ButtonProps {
	[key: string]: any;
	children: React.ReactNode;
}

const StylesButton = styled(Button)(({ theme }) => ({
	width: '100%',
	minWidth: '180px',
	fontSize:'1.25rem',
	whiteSpace:'pre-wrap',
	minHeight: theme.spacing(7),
	borderRadius: theme.spacing(4),
	maxWidth: theme.spacing(30),
}));


export default function SButton({ children ,...rest }: Props) {
	return <StylesButton  {...rest}>{children}</StylesButton>;
}
