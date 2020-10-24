import React from 'react';
import Login from '../Components/Login';
import { setAuth } from '../Redux/Actions/setAuth';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LoginPage = ({ setAuth, isAuth }) => {
  const onLogin = (type) => {
    if (type === 'facebook') {
      setAuth();
    }
    if (type === 'google') {
      setAuth();
    }
  }

  return (
    <div>
      {
        !isAuth ? (
          <Login onLogin={onLogin} />
        ) : (
          <>
            <div>Zalogowano...</div>
            <Login onLogin={onLogin} />
          </>
        )
      }
    </div>
    // 
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = {
  setAuth
}

LoginPage.propTypes = {
  setAuth: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);