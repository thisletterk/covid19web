import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Continent from '../components/Continent';
import ContinentInfo from '../components/ContinentInfo';

const Home = (props) => (
	<Switch>
		{/* <Route exact path='/' component={Continent}/> */}
		<Route path="/statistics?country" component={ContinentInfo} />
	</Switch>
);

export default Home;
