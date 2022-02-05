import React from 'react';
import ReactDOM from 'react-dom';

import { RootCmp } from './RootCmp.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './assets/style/styles.scss';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<RootCmp />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);