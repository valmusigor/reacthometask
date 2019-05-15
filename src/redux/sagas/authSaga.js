
import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import {
  actionFetchError, actionFetchLoading, actionFetchSuccess, actionClearState,
  AUTORIZE_FETCH_REQUEST,
} from '../reducer/autorizeReducer';

const getSign = state => state.dataAutorize;

function* fetchAutorize(action) {
  let result;
  const dataForm = yield select(getSign);
  yield put(actionFetchLoading('loading'));
  try {
    if (action.typeAction === 'signin') {
      result = yield call(() => fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
          JSON.stringify({
            login: dataForm.signIn.valueLogin,
            pass: dataForm.signIn.valuePass,
          }),
      })
        .then(res => res.json()));
    } else if (action.typeAction === 'signup') {
      result = yield call(() => fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
            JSON.stringify({
              login: dataForm.signUp.valueLogin,
              pass: dataForm.signUp.valuePass,
            }),
      })
        .then(res => res.json()));
    }
    if (JSON.parse(result).status === 'ok') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('id', JSON.parse(result).id);
    } else {
      localStorage.setItem('auth', 'false');
    }
    (action.typeAction === 'signin') ? yield put(actionClearState('signin')) : yield put(actionClearState('signup'));
    yield put(actionFetchSuccess('success'));
  } catch (e) {
    yield put(actionFetchError('error'));
  }
}

function* authSaga() {
  yield takeEvery(AUTORIZE_FETCH_REQUEST, fetchAutorize);
}

export default authSaga;
