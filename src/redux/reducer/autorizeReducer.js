const INPUT_LOGIN = 'inputLogin';
const INPUT_PASSWORD = 'inputPass';
const REPEAT_PASSWORD = 'inputPassRep';
const CHECK_RESPONSE = 'checkResponse';
const FETCH_ERROR = 'fetchError';
const FETCH_LOADING = 'fetchLoading';
const FETCH_SUCCESS = 'fetchSuccess';
const CLEAR_STATE = 'clearState';
export const AUTORIZE_FETCH_REQUEST = 'authFetchRequest';

export const actionInputLogin = (login, typeAction) => ({ type: INPUT_LOGIN, login, typeAction });
export const actionInputPass = (password, typeAction) => ({ type: INPUT_PASSWORD, password, typeAction });
export const actionInputPassRep = password => ({ type: REPEAT_PASSWORD, password });
export const actionFetchError = status => ({ type: FETCH_ERROR, status });
export const actionFetchLoading = status => ({ type: FETCH_LOADING, status });
export const actionFetchSuccess = data => ({ type: FETCH_SUCCESS, data });
export const actionClearState = typeAction => ({ type: CLEAR_STATE, typeAction });
export const actionClickAuth = (typeAction, history) => ({ type: AUTORIZE_FETCH_REQUEST, typeAction, history });
export const actionCheckResponse = (typeAction, status) => ({ type: CHECK_RESPONSE, status });

const inputLogin = (elemf, login, type) => {
  const elem = elemf;
  elem.valueLogin = login;
  const str = login.trim();
  const result = str.match(/@/gi);
  if (result === null) {
    elem.disabled = true;
    elem.statusLogin = false;
    elem.displayErrorEmail = 'inline';
  } else if (result.length > 1) {
    elem.disabled = true;
    elem.displayErrorEmail = 'inline';
  } else if (result.length === 1 && elem.statusPassword) {
    if (type === 'signup') {
      if (elem.statusPasswordRepeat) {
        elem.disabled = false;
        elem.displayErrorEmail = 'none';
      } else {
        elem.statusLogin = true;
        elem.displayErrorEmail = 'none';
      }
    } else {
      elem.disabled = false;
      elem.displayErrorEmail = 'none';
    }
  } else {
    elem.statusLogin = true;
    elem.displayErrorEmail = 'none';
  }
  return elem;
};

const inputPass = (elemf, password, type) => {
  const elem = elemf;
  elem.valuePass = password;
  const str = password.trim();
  if (str.length < 4) {
    elem.disabled = true;
    elem.statusPassword = false;
    elem.displayErrorPass = 'inline';
  } else if (elem.statusLogin) {
    if (type === 'signup') {
      if (elem.statusPasswordRepeat) {
        elem.disabled = false;
        elem.displayErrorPass = 'none';
      } else {
        elem.statusPassword = true;
        elem.displayErrorPass = 'none';
      }
    } else {
      elem.disabled = false;
      elem.displayErrorPass = 'none';
    }
  } else {
    elem.statusPassword = true;
    elem.displayErrorPass = 'none';
  }
  return elem;
};

const inputPassRep = (statef, password) => {
  const state = statef;
  state.valuePassRep = password;
  if (password === state.valuePass) {
    if (state.statusLogin && state.statusPassword) {
      state.disabled = false;
      state.displayErrorPassRep = 'none';
    } else {
      state.statusPasswordRepeat = true;
      state.displayErrorPassRep = 'none';
    }
  } else {
    state.disabled = true;
    state.statusPasswordRepeat = false;
    state.displayErrorPassRep = 'inline';
  }
  return state;
};
const setEmptyField = (state, type) => {
  let elem;
  if (type === 'signin') { elem = state.signIn; } else {
    elem = state.signUp;
    elem.valuePassRep = '';
    elem.statusPasswordRepeat = false;
    elem.displayErrorPassRep = 'none';
  }
  elem.valueLogin = '';
  elem.valuePass = '';
  elem.statusLogin = false;
  elem.statusPassword = false;
  elem.disabled = true;
  elem.displayErrorEmail = 'inline';
  elem.displayErrorPass = 'inline';
};
const initialState = {
  name: [{ id: 0, label: 'signin' }, { id: 1, label: 'signup' }],
  signIn: {
    valueLogin: '',
    valuePass: '',
    statusLogin: false,
    statusPassword: false,
    disabled: true,
    displayErrorEmail: 'none',
    displayErrorPass: 'none',
    statusAutorize: '',
    user: '',
  },
  signUp: {
    valueLogin: '',
    valuePass: '',
    valuePassRep: '',
    statusLogin: false,
    statusPassword: false,
    statusPasswordRepeat: false,
    disabled: true,
    displayErrorEmail: 'none',
    displayErrorPass: 'none',
    displayErrorPassRep: 'none',
    statusAutorize: '',
  },
};
const autorizeReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case INPUT_LOGIN:
      if (action.typeAction === 'signin') {
        stateCopy.signIn = { ...state.signIn };
        stateCopy.signIn = inputLogin(stateCopy.signIn, action.login, action.typeAction);
      } else {
        stateCopy.signUp = { ...state.signUp };
        stateCopy.signUp = inputLogin(stateCopy.signUp, action.login, action.typeAction);
      }
      return stateCopy;
    case INPUT_PASSWORD:
      if (action.typeAction === 'signin') {
        stateCopy.signIn = { ...state.signIn };
        stateCopy.signIn = inputPass(stateCopy.signIn, action.password, action.typeAction);
      } else {
        stateCopy.signUp = { ...state.signUp };
        stateCopy.signUp = inputPass(stateCopy.signUp, action.password, action.typeAction);
      }
      return stateCopy;
    case REPEAT_PASSWORD:
      stateCopy.signUp = { ...state.signUp };
      stateCopy.signUp = inputPassRep(stateCopy.signUp, action.password);
      return stateCopy;
    case FETCH_ERROR:
      stateCopy.signIn = { ...state.signIn };
      stateCopy.signIn.statusAutorize = action.status;
      return stateCopy;
    case FETCH_LOADING:
      stateCopy.signIn = { ...state.signIn };
      stateCopy.signIn.statusAutorize = action.status;
      return stateCopy;
    case FETCH_SUCCESS:
      stateCopy.signIn = { ...state.signIn };
      stateCopy.signIn.statusAutorize = action.data;
      return stateCopy;
    case CLEAR_STATE:
      if (action.typeAction === 'signin') {
        stateCopy.signIn = { ...state.signIn };
      } else if (action.typeAction === 'signup') { stateCopy.signUp = { ...state.signUp }; }
      setEmptyField(stateCopy, action.typeAction);
      return stateCopy;
    default:
      return state;
  }
};

export default autorizeReducer;
