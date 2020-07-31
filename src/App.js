import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/style.css';
import Covid19 from './pages/Covid19';
import Continent from './components/Continent';
import ContinentInfo from './components/ContinentInfo';


class App extends Component {
	render() {
		return (
			<div>
				<Home/>
		{/* <ContinentInfo/> */}
		<Covid19/>
	
			</div>
		);
	}
}

export default App;
