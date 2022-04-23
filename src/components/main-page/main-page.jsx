import React from "react";
import CardList from "../card/card-list";
import Map from "../map/map";
import {useSelector, useDispatch} from 'react-redux';
import LocationList from "../location/location-list";
import CityInfo from "./city-info";
import Sorting from "./sorting/sorting";
import Loader from "../loader/loader";
import Header from "../header/header";
import {PageType} from "../../const";
import {setPageType} from "../../store/reducer/interface/action";

const Main = () => {
  const dispatch = useDispatch();
  dispatch(setPageType(PageType.MAIN));

  const isDataLoaded = useSelector((state) => state.INTERFACE.isDataLoaded);
  return (
    !isDataLoaded
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
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <CityInfo/>
                <Sorting/>
                <CardList/>
              </section>
              <div className="cities__right-section">
                <Map/>
              </div>
            </div>
          </div>
        </main>
      </div>

  );
};


export {Main};
export default Main;
