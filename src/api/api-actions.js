import {ActionCreator} from "../store/action";
// import {AuthorizationStatus} from "../const";
import {adaptOfferForClient} from "../util.js/adapter";

const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      return dispatch(ActionCreator.loadOffers(data.map(adaptOfferForClient)));
    })
);


export {fetchOfferList};
