import { Component } from 'react';
import { Switch, Route } from 'react-router';

import { AppHeader } from './cmps/AppHeader';
import routes from './routes';

export class RootCmp extends Component {
	render() {
		return(
			<main>
				<AppHeader />
				<Switch>
					{routes.map((route) => (
						<Route key={route.path} component={route.component} path={route.path} />
					))}
				</Switch>
			</main>
		)
	}
}