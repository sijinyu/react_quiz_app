import React from 'react';
import { Route, Routes } from 'react-router-dom';
import quiz from '../components/quiz';
import LayoutRoute from './LayoutRoute';

export default function Router() {
	
	return (
		<Routes>
			<Route element={<LayoutRoute />}>
				<Route path={"/"} element={<quiz.Start />} />
				<Route path={"/quiz"} element={<quiz.Quizing />} />
				<Route path={"/result"} element={<quiz.Result />} />
			</Route>
		</Routes>
	);
}
