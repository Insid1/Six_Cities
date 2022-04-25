import React from "react";
import {useSelector} from 'react-redux';
import LocationList from "../location/location-list";
import Loader from "../loader/loader";
import Header from "../header/header";
import {selectDataLoadedStatus} from "@reducer/interface/selectors";
import LeftSection from "./left-section/left-section";
import RightSection from "./right-section/right-section";

const Main = () => {


  const isDataLoaded = useSelector(selectDataLoadedStatus);
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
