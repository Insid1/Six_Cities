import React from "react";
import {offersType} from "../../prop-type";
import CardList from "./card-list";
import {Link} from 'react-router-dom';
import {AppRoute} from "../../const";
import Map from "../map/map";
import PropTypes from 'prop-types';
import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';
import LocationList from "../location/location-list";
import {capitalize} from "../../util.js/common";


const Main = (props) => {
  const {offers, type, currCity} = props;
  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41" /></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {capitalize(currCity)}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by </span>
              <span className="places__sorting-type" tabIndex="0">
            Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <CardList
              offers={offers}
              type={type}
            />
          </section>
          <div className="cities__right-section">
            <Map
              offers={offers}
              type={type}
            />
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  offers: offersType,
  type: PropTypes.string.isRequired,
  currCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  fillOffers() {
    dispatch(ActionCreator.fillOffers());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
