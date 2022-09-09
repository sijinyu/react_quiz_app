import React from 'react';
import { Outlet } from 'react-router-dom';
import SContainer from '../components/common/Container';


export default function LayoutRoute() {
	return (
		<SContainer>
			<Outlet />
		</SContainer>
	);
}
