const FETCH_ERROR = 'fetchErrorAds';
const FETCH_LOADING = 'fetchLoadingAds';
const FETCH_SUCCESS = 'fetchSuccessAds';
const CURRENT_PAGE = 'currentPage';

const actionFetchErrorAds = status => ({ type: FETCH_ERROR, status });
const actionFetchLoadingAds = status => ({ type: FETCH_LOADING, status });
const actionFetchSuccessAds = data => ({ type: FETCH_SUCCESS, data });
export const actionCurrentPage = number => ({ type: CURRENT_PAGE, number });


const initialState = {
  ads: [
    {
      id: 0, short_content: 'склад', path_short_image: 'http://www.mobilmusic.ru/mfile/fd/05/76/594151.gif', date: '17-03-2019', square: '20', price: '12', tel: '+375441234567',
    },
  ],
  status: '',
  totalPageSize: 0,
  currentPage: 0,
};

export const actionSearchAds = () => (dispatch, getState) => {
  dispatch(actionFetchLoadingAds('loading'));
  fetch('/rent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:
        JSON.stringify({
          price: getState().itemsSearchRentalAds.rangePrice.price,
          square: getState().itemsSearchRentalAds.rangeSquare.square,
          firma: getState().itemsSearchRentalAds.selectorFirm.selectedValue,
          address: getState().itemsSearchRentalAds.selectorAddress.selectedValue,
          floor: getState().itemsSearchRentalAds.selectorFloor.selectedValue,
          currentPage: getState().itemsRentalAds.currentPage,
        }),
  })
    .then(res => res.json())
    .then((data) => {
      dispatch(actionFetchSuccessAds(data));
    })
    .catch(() => dispatch(actionFetchErrorAds('error')));
};

const rentalAdsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case CURRENT_PAGE:
      stateCopy.currentPage = action.number;
      return stateCopy;
    case FETCH_ERROR:
      stateCopy.status = action.status;
      return stateCopy;
    case FETCH_LOADING:
      stateCopy.status = action.status;
      return stateCopy;
    case FETCH_SUCCESS:
      stateCopy.ads = [...JSON.parse(action.data).listAds];
      stateCopy.totalPageSize = JSON.parse(action.data).totalPageSize;
      console.log(stateCopy.totalPageSize);
      stateCopy.status = 'success';
      return stateCopy;
    default:
      return state;
  }
};

export default rentalAdsReducer;
