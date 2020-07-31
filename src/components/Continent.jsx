import React, { Component } from 'react';
import axios from 'axios';
import ContinentList from './ContinentList';
import Intro from './Intro';
import { Link } from 'react-router-dom';



class Continent extends Component {
    state ={
		continent:[],
		
	}

	// componentDidMount() {
	// 	axios({
	// 		method: 'GET',
	// 		url: 'https://covid-193.p.rapidapi.com/statistics',
	// 		headers: {
	// 			'content-type': 'application/octet-stream',
	// 			'x-rapidapi-host': 'covid-193.p.rapidapi.com',
	// 			'x-rapidapi-key': 'c1da975c94msh84d4bffd9d40d57p1c2788jsn6ecc2887a66d',
	// 			useQueryString: true
	// 		}
	// 	})
	// 		.then((response) => {
	// 			console.log(response);
	// 			const data = response.data;
	// 			this.setState({ continent: data.response });
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }

	onContinentInput = e => {
		axios({
			method: 'GET',
			url: `https://covid-193.p.rapidapi.com/statistics?country=${e.target.value}`,
			headers: {
				'content-type': 'application/octet-stream',
				'x-rapidapi-host': 'covid-193.p.rapidapi.com',
				'x-rapidapi-key': 'c1da975c94msh84d4bffd9d40d57p1c2788jsn6ecc2887a66d',
				useQueryString: true
			}
		})
			.then((response) => {
				console.log(response);
				const data = response.data;
				this.setState({ continent: data.response , cases: data.response[0].cases});
			})
			.catch((error) => {
				console.log(error);
			});
		
	}

    render() { 

		const {continent} = this.state

        return ( <div>The lenght of continent is = {this.state.continent.length}
		<div><Intro message='You can find latest covid19 info here.'/></div>
		<div>
			<input type='text' onChange={this.onContinentInput}/>
		</div>
		<ContinentList list={continent}/>
		</div> );
    }
}
 
export default Continent;