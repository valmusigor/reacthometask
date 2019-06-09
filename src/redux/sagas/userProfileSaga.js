import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import {
  actionFectchErrorUser, actionFectchErrorUserExist, actionFectchLoadingUser, actionFectchSuccessUser,
  actionFectchSuccessEditUser, USER_FETCH_EDIT_REQUEST, USER_FETCH_REQUEST,
} from '../reducer/userProfileReducer';

const getUserData = state => state.userProfile;

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

function* fetchEditUser(action) {
  const userProfile = yield select(getUserData);
  yield put(actionFectchLoadingUser('loading'));
  try {
    const data = yield call(() => fetch('/cabinet/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body:
          JSON.stringify({
            login: userProfile.login,
            email: userProfile.email,
            firma: userProfile.firma,
            unp: userProfile.unp,
            address: userProfile.address,
            tel: userProfile.tel,
          }),
    })
      .then(response => response.json()));
    if (JSON.parse(data).status === 'ok') {
      yield put(actionFectchSuccessEditUser(JSON.parse(data)));
      action.history.push('/cabinet/user');
    } else if (JSON.parse(data).status === 'bad') {
      yield put(actionFectchErrorUserExist('exist', JSON.parse(data).message));
    }
  } catch (e) {
    yield put(actionFectchErrorUser('error'));
  }
}


function* userProfileSaga() {
  yield takeEvery(USER_FETCH_REQUEST, fetchUser);
  yield takeEvery(USER_FETCH_EDIT_REQUEST, fetchEditUser);
}

export default userProfileSaga;
