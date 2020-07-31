import React from 'react';

class MainLayout extends React.Component {
	render() {
		return (
			<div>
				
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default MainLayout;
