import React, {useEffect} from "react";
import {offersType} from "@src/prop-type";
import Header from "@components/header/header";
import FavoriteList from "./favorites-components/favorite-components/favorite-list";
import {fetchFavoriteOffers} from "@reducer/favorites/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectIsFavoriteOffersLoaded, selectIsNoFavoriteOffers} from "@reducer/favorites/selectors";
import Loader from "@components/loader/loader";
import Footer from "@components/footer/footer";

const Favorites = () => {
  const isNoFavoritesOffers = useSelector(selectIsNoFavoriteOffers);
  const isFavoriteOffersLoaded = useSelector(selectIsFavoriteOffersLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  if (!isFavoriteOffersLoaded) {
    return <Loader/>;
  }

  return (
    <div className={`page ${isNoFavoritesOffers ? `page--favorites-empty` : ``}`}>
      <Header/>
      <main className={`page__main 
      page__main--favorites
      ${isNoFavoritesOffers ? `page__main--favorites-empty` : ``}
      `}>
        <div className="page__favorites-container container">
          <FavoriteList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

Favorites.propTypes = {
  offers: offersType
};

export default Favorites;
