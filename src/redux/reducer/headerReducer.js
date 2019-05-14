const FETCH_ERROR = 'fetchErrorCurr';
const FETCH_LOADING = 'fetchLoadingCurr';
const FETCH_SUCCESS = 'fetchSuccessAdsCurr';
const actionFetchErrorCurr = status => ({ type: FETCH_ERROR, status });
const actionFetchLoadingCurr = status => ({ type: FETCH_LOADING, status });
const actionFetchSuccessCurr = data => ({ type: FETCH_SUCCESS, data });

export const actionHeaderInit = () => (dispatch) => {
  dispatch(actionFetchLoadingCurr('loading'));
  fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates')
    .then(response => response.json())
    .then((data) => {
      dispatch(actionFetchSuccessCurr(data));
    }).catch(() => dispatch(actionFetchErrorCurr('error')));
};

const initialState = {
  itemsMenu: [
    { id: 0, path: '/', name: 'Главная' },
    { id: 1, path: '/rent', name: 'Аренда' },
    { id: 2, path: '/friends', name: 'Лучшие друзья' },
    { id: 3, path: '#', name: 'Контакты' },
  ],
  exchangeRates: {
    dispay: 0,
    soldEuro: '0',
    buyEuro: '0',
    soldUsd: '0',
    buyUsd: '0',
    solRub: '0',
    buyRub: '0',
  },
  statusExchangeRates: '',
};

const headerReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  stateCopy.exchangeRates = { ...state.exchangeRates };
  switch (action.type) {
    case FETCH_ERROR:
      stateCopy.statusExchangeRates = action.status;
      return stateCopy;
    case FETCH_LOADING:
      stateCopy.statusExchangeRates = action.status;
      return stateCopy;
    case FETCH_SUCCESS:
      stateCopy.exchangeRates.soldEuro = action.data.rates[0].sellRate;
      stateCopy.exchangeRates.buyEuro = action.data.rates[0].buyRate;
      stateCopy.exchangeRates.soldUsd = action.data.rates[4].sellRate;
      stateCopy.exchangeRates.buyUsd = action.data.rates[4].buyRate;
      stateCopy.exchangeRates.soldRub = action.data.rates[3].sellRate;
      stateCopy.exchangeRates.buyRub = action.data.rates[3].buyRate;
      stateCopy.statusExchangeRates = 'success';
      return stateCopy;
    default:
      return state;
  }
};

export default headerReducer;
