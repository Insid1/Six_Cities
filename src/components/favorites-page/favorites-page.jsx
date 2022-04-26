import React, {useEffect} from "react";
import {offersType} from "@src/prop-type";
import Header from "@components/header/header";
import FavoriteList from "./favorites-components/favorite-components/favorite-list";
import {fetchFavoriteOffers} from "@reducer/favorites/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectIsFavoriteOffersLoaded} from "@reducer/favorites/selectors";
import Loader from "@components/loader/loader";

const Favorites = () => {

  const isFavoriteOffersLoaded = useSelector(selectIsFavoriteOffersLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  if (!isFavoriteOffersLoaded) {
    return <Loader/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoriteList/>
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
