import React, { Component } from 'react';
import { connect } from 'react-redux';

class Okr extends Component {

	render() {

		const { profile } = this.props;
		return (
			<div> { profile } </div>
		);
	}
}

export default connect(({ profile }) => ({ profile }))(Okr);;

