import React, { Component } from 'react';
import axios from 'axios'

class ContinentInfo extends Component {
    state = {
        continent:[]
    }

  componentDidMount() {
		axios({
			method: 'GET',
			url: 'https://covid-193.p.rapidapi.com/statistics',
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
        
        return ( <div>
            <h1>More information on the continent</h1>

            {
                continent.map((val, key) => {
                    return(
                        <div>
                            <p>Country: {val.continent}</p>
                        </div>
                    )
                })
            }

        </div> );
    }
}
 




export default ContinentInfo;