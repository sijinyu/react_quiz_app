import { StackProps } from '@mui/material';

export interface IAsyncContainerProps extends StackProps { 
    children:React.ReactNode,
	isLoading:boolean,   
}