import React from 'react';
import { styled, Container, ContainerProps } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
	padding: theme.spacing(3),
	marginBottom: theme.spacing(6),
	minWidth:"100%",
	display: 'flex',
	alignItems:'center',
	justifyContent:'center'
}));

function SContainer <P extends ContainerProps>({
	children,
	...props
}: ContainerProps) {
	return <StyledContainer {...(props as P)}>{children}</StyledContainer>;
}


export default SContainer;
