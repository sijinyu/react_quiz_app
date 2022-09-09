import React from 'react';
import { Outlet } from 'react-router-dom';
import SContainer from '../components/common/Container';


function LayoutRoute() {
	return (
		<SContainer>
			<Outlet />
		</SContainer>
	);
}
export default LayoutRoute;
