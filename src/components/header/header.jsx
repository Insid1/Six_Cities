import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import PropTypes from 'prop-types';
import {logout} from "../../api/api-actions";
import './sign-out-btn.css';

const Header = ({authorizationStatus, userEmail, onLogout}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link"
              to={AppRoute.MAIN}>
              <img className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile"
                  to={AppRoute.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{
                    authorizationStatus === AuthorizationStatus.AUTH
                      ? userEmail
                      : `Sign in`
                  }</span>
                </Link>
              </li>
              {
                authorizationStatus === AuthorizationStatus.AUTH
                  &&
                  <li className="header__nav-item user"
                    onClick={onLogout}>
                    <a className="sign-out-btn">Sign out</a>
                  </li> }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
