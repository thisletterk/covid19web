import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Covid19 from '../pages/Covid19';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="container">
					
				</div>
				<ul className="menu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/covid19">Covid19</Link>
					</li>
					
				</ul>
			</div>
		);
	}
}
export default Navbar;
