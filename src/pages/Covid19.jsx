import React, { Component } from 'react';
import axios from 'axios';

class Covid19 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			continent: [],
			// cases:[],
			// deaths:[],
			// time:''
		};
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
	// 			this.setState({ continent: data.response , cases: data.response[0].cases, deaths:data.response[0].deaths, time:data.response[0].time});
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
				this.setState({ continent: data.response });
			})
			.catch((error) => {
				console.log(error);
			});
		
	}

	render() {

		const {continent} = this.state
		
		return (<div>
			<div>
			<h1>Covid19 Information Page</h1>
			
			<div className='container'>
			<div><input className='input'   type='text' placeholder='please enter your country here' onChange={this.onContinentInput}/></div><br/>
			<div className='container_information'>

			{
				continent.slice(0,1).map((val, key) => {
					return <div key={key}>
						<h3>This information as at: {continent[0].time}</h3>
						<p >Continent: {val.continent}</p>
                <p>Country: {val.country}</p>
                <p>Population: {val.population}</p>
				<h3>CASES</h3>
				<p>Cases: {continent[0].cases.active}</p>
				<p>Critical: {continent[0].cases.critical}</p>
				<p>Recovered: {continent[0].cases.recovered}</p>
				<p>New Cases: {continent[0].cases.new}</p>
				<h3>DEATHS</h3>
				<p>Deaths: {continent[0].deaths.total}</p>
				
						
						</div>
				})
				
			}
			</div>

			</div>
			
			
			</div>
		</div>)
	}
}

export default Covid19;
