import React, { Component } from 'react';
import actions from 'api/actions';

class Okr extends Component {

	render() {

		const { children } = this.props;
		return (
			<div> { children } </div>
		);
	}
}

export default Okr;
