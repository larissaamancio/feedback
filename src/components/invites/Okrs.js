import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/invites/Header';

class Okrs extends React.Component {

  componentDidMount() {
    const { profile, params: { uid } } = this.props;
    const invite = profile.getIn(['invites', uid]);
    if (!invite) {
    profile({ uid })
    }
  }

  render() {
    const { profile, params: { uid } } = this.props;
    const invite = profile.getIn(['invites', uid]);
    const okrs = profile.getIn(['invites', uid, 'feedback', '1239987666', 'okrs' ]);
    const descriptions = okrs.map((description, key) => (<div key={key}>{okrs.description}</div>)).toList().toJS()
    return (
      <div>
        <Header invite={ invite } />
        <div>{ descriptions }</div>
      </div>
    );
  }
}

export default connect(({ profile }) => ({ profile }))(Okrs);

// feedbacks.map((feedback, key) => (<div key={key}>{feedback.description}</div>)).toList().toJS()