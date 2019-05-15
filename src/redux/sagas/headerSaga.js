import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actionFetchErrorCurr, actionFetchLoadingCurr, actionFetchSuccessCurr,
  CURRENCY_FETCH_REQUEST,
} from '../reducer/headerReducer';

function* fetchCurrency() {
  yield put(actionFetchLoadingCurr('loading'));
  try {
    const data = yield call(() => fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates')
      .then(response => response.json()));
    yield put(actionFetchSuccessCurr(data));
  } catch (e) {
    yield put(actionFetchErrorCurr('error'));
  }
}

function* headerSaga() {
  yield takeEvery(CURRENCY_FETCH_REQUEST, fetchCurrency);
}

export default headerSaga;
