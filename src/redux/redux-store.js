import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import autorizeReducer from './reducer/autorizeReducer';
import headerReducer from './reducer/headerReducer';
import searchRentalAdsReducer from './reducer/searchRentalAdsReducer';
import rentalAdsReducer from './reducer/rentalAdsReducer';

const reducers = combineReducers({
  itemsHeader: headerReducer,
  dataAutorize: autorizeReducer,
  itemsSearchRentalAds: searchRentalAdsReducer,
  itemsRentalAds: rentalAdsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
