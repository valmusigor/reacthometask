import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import autorizeReducer from './reducer/autorizeReducer';
import headerReducer from './reducer/headerReducer';
import searchRentalAdsReducer from './reducer/searchRentalAdsReducer';
import userProfileReducer from './reducer/userProfileReducer';
import rentalAdsReducer from './reducer/rentalAdsReducer';
import headerSaga from './sagas/headerSaga';
import authSaga from './sagas/authSaga';
import userProfileSaga from './sagas/userProfileSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  itemsHeader: headerReducer,
  dataAutorize: autorizeReducer,
  itemsSearchRentalAds: searchRentalAdsReducer,
  itemsRentalAds: rentalAdsReducer,
  userProfile: userProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(headerSaga);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(userProfileSaga);

export default store;
