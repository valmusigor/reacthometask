
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
  yield put(actionFetchLoading('loading', action.typeAction));
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
    (action.typeAction === 'signin') ? yield put(actionClearState('signin')) : yield put(actionClearState('signup'));
    if (JSON.parse(result).status === 'ok') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('token', JSON.parse(result).token);
      yield put(actionFetchSuccess('success', action.typeAction));
    } else if (JSON.parse(result).status === 'exist') {
      yield put(actionFetchSuccess('exist', action.typeAction));
    } else { yield put(actionFetchSuccess('success', action.typeAction)); }
    action.history.push('/auth');
  } catch (e) {
    yield put(actionFetchError('error'), action.typeAction);
  }
}

function* authSaga() {
  yield takeEvery(AUTORIZE_FETCH_REQUEST, fetchAutorize);
}

export default authSaga;
