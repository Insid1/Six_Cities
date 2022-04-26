import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import LocationList from "../location/location-list";
import Loader from "../loader/loader";
import Header from "../header/header";
import {selectIsOffersLoaded} from "@reducer/offers/selectors";
import LeftSection from "./left-section/left-section";
import RightSection from "./right-section/right-section";
import {fetchOfferList} from "@store/api-actions";

const Main = () => {
  const isOffersLoaded = useSelector(selectIsOffersLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOfferList());
  }, [dispatch]);

  return (
    !isOffersLoaded
      ? <Loader/>
      : <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <LocationList/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <LeftSection/>
              <RightSection/>
            </div>
          </div>
        </main>
      </div>

  );
};


export {Main};
export default Main;
