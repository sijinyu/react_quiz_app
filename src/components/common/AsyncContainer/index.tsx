import React from 'react';
import {  Stack } from '@mui/material';
import { IAsyncContainerProps } from './types';
import ProgressContainer from '../ProgressContainer';


function AsyncContainer({ children,isLoading, ...props}:IAsyncContainerProps){
	if(isLoading) return <ProgressContainer />
	return <Stack {...(props)} >{children}</Stack>;
}


export default AsyncContainer;
