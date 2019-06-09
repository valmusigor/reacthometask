const FETCH_ERROR = 'fetchErrorCurr';
const FETCH_LOADING = 'fetchLoadingCurr';
const FETCH_SUCCESS = 'fetchSuccessAdsCurr';
export const CURRENCY_FETCH_REQUEST = 'fetchRequest';

export const actionFetchErrorCurr = status => ({ type: FETCH_ERROR, status });
export const actionFetchLoadingCurr = status => ({ type: FETCH_LOADING, status });
export const actionFetchSuccessCurr = data => ({ type: FETCH_SUCCESS, data });
export const actionHeaderInit = () => ({ type: CURRENCY_FETCH_REQUEST });

const initialState = {
  itemsMenu: [
    { id: 0, path: '/', name: 'Главная' },
    { id: 1, path: '/rent', name: 'Аренда' },
    { id: 2, path: '/friends', name: 'Лучшие друзья' },
    { id: 3, path: '/contacts', name: 'Контакты' },
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
