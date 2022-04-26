import React from "react";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "@src/const";
import {logout} from "@store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthStatus, selectUserEmail} from "@reducer/auth/selectors";
import './sign-out-btn.css';

const Header = () => {
  const authorizationStatus = useSelector(selectAuthStatus);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleLogOutClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

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
                    onClick={handleLogOutClick}>
                    <a className="sign-out-btn">Sign out</a>
                  </li> }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
