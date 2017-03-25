import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/invites/Header';

class Okrs extends React.Component {

  componentDidMount() {
    //const { request, params: { uid } } = this.props;
    //const invite = profile.getIn(['invites', uid]);
    //if (!invite) {
    //request({ uid })
    //}
  }

  render() {
    const { profile, params: { uid } } = this.props;
    const invite = profile.getIn(['invites', uid]);
    debugger;
    return (
      <div>
        <Header invite={invite} />

      </div>
    );
  }
}

export default connect(({ profile }) => ({ profile }))(Okrs);
