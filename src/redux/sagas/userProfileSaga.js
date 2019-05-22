import { call, put, takeEvery } from 'redux-saga/effects';
import {
  actionFectchErrorUser, actionFectchLoadingUser, actionFectchSuccessUser,
  USER_FETCH_REQUEST,
} from '../reducer/userProfileReducer';

function* fetchUser() {
  yield put(actionFectchLoadingUser('loading'));
  try {
    const data = yield call(() => fetch('/cabinet/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
    })
      .then(response => response.json()));
    yield put(actionFectchSuccessUser(JSON.parse(data)));
  } catch (e) {
    yield put(actionFectchErrorUser('error'));
  }
}


function* userProfileSaga() {
  yield takeEvery(USER_FETCH_REQUEST, fetchUser);
}

export default userProfileSaga;
