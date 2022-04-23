import React from "react";
import {FavoritesList} from "./favorites-list";
import {offersType} from "../../prop-type";
import Header from "../header/header";
import {PageType} from "../../const";
import {useDispatch} from "react-redux";
import {setPageType} from "../../store/reducer/interface/action";

const Favorites = ({offers}) => {
  const dispatch = useDispatch();
  dispatch(setPageType(PageType.FAVORITES));

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link"
                      href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesList offers={favoriteOffers} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link"
          href="main.html">
          <img className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: offersType
};

export default Favorites;
