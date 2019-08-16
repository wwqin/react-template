import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route } from 'react-router-dom';
import history from './history.js';
import HelloSacc from './page/HelloSacc.jsx'

class App extends React.Component{
	render(){
		return (
				<Router history={history}>
						<Route exact path="/" component={HelloSacc}/>
				</Router>
		);
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById('app')
)