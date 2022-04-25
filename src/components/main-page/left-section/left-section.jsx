import React from 'react';
import CityInfo from '../city-info';
import Sorting from './sorting/sorting';
import CardList from '@components/card/card-list';
import {useSelector} from 'react-redux';
import {selectSortedOffers} from '@reducer/selectors-common';
import {PageType} from '@src/const';

const LeftSection = () => {
  const sortedOffers = useSelector(selectSortedOffers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <CityInfo/>
      <Sorting/>
      <CardList
        offers={sortedOffers}
        pageType={PageType.MAIN}
      />
    </section>
  );
};

export {LeftSection};
export default LeftSection;
