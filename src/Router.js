import React, { PropTypes } from 'react';
import { IndexRedirect, Router, Route } from 'react-router';
import Base from 'components/Base';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import ChangePassword from 'components/user/ChangePassword';
import Okr from 'components/invite/okr';

import Profile from 'components/profile';

const FeedbackRouter = ({ history, validate }) => {

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/change_password" component={ChangePassword} />
      <Route path="/" component={Base} onEnter={validate}>
        <IndexRedirect to="/profile" />
        <Route path="/invites/:id" component={Okr} />
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
  )
}

export default FeedbackRouter;
