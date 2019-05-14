const CHANGE_PRICE = 'changePrice';
const CHANGE_SQUARE = 'changeSquare';
const CHANGE_CURRENCY = 'changeCurrency';
const CHANGE_FIRM = 'changeFirm';
const CHANGE_ADDRESS = 'changeAddress';
const CHANGE_FLOOR = 'changeFloor';

export const actionChangePrice = price => ({ type: CHANGE_PRICE, price });
export const actionChangeSquare = square => ({ type: CHANGE_SQUARE, square });
export const actionChangeCurrency = currency => ({ type: CHANGE_CURRENCY, currency });
export const actionChangeFirm = firm => ({ type: CHANGE_FIRM, firm });
export const actionChangeAddress = address => ({ type: CHANGE_ADDRESS, address });
export const actionChangeFloor = floor => ({ type: CHANGE_FLOOR, floor });

const initialState = {
  currency: '',
  rangePrice: {
    legend: 'Цена квадратного метра',
    minValue: '0',
    maxValue: '10',
    price: '10',
    id: 'rangePriceList',
    rangeValue: [{ id: 0, value: '0', label: '0' },
      { id: 1, value: '2', label: '2' },
      { id: 2, value: '4', label: '4' },
      { id: 3, value: '6', label: '6' },
      { id: 4, value: '8', label: '8' },
      { id: 5, value: '10', label: '10' },
    ],
  },
  rangeSquare: {
    legend: 'Площадь помещения(-й)',
    minValue: '0',
    maxValue: '100',
    square: '100',
    id: 'rangeSquareList',
    rangeValue: [{ id: 0, value: '0', label: '0' },
      { id: 1, value: '20', label: '10' },
      { id: 2, value: '40', label: '20' },
      { id: 3, value: '60', label: '60' },
      { id: 4, value: '80', label: '80' },
      { id: 5, value: '100', label: '100' },
    ],
  },
  selectorFirm: {
    selectedValue: 'all',
    title: 'Организация',
    listValue: [{ id: 0, value: 'all', label: 'Все' },
      { id: 1, value: 'firma', label: 'Фирма' },
      { id: 2, value: 'firma+', label: 'Фирма плюс' },
    ],
  },
  selectorAddress: {
    selectedValue: 'all',
    title: 'Адрес',
    listValue: [
      { id: 0, value: 'all', label: 'Все' },
      { id: 1, value: '27/1', label: 'Героев 120 дивизии 27/1' },
      { id: 2, value: '27/2', label: 'Героев 120 дивизии 27/2' },
      { id: 3, value: '27/4', label: 'Героев 120 дивизии 27/4' },
      { id: 4, value: '27/5', label: 'Героев 120 дивизии 27/5' },
      { id: 5, value: '23A', label: 'Героев 120 дивизии 23А' },
    ],
  },
  selectorFloor: {
    selectedValue: 'all',
    title: 'Этаж',
    listValue: [
      { id: 0, value: 'all', label: 'Все' },
      { id: 1, value: '1', label: '1' },
      { id: 2, value: '2', label: '2' },
      { id: 3, value: '3', label: '3' },
      { id: 4, value: '4', label: '4' },
    ],
  },
};
const searchRentalAdsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  const mas = [];
  switch (action.type) {
    case CHANGE_PRICE:
      stateCopy.rangePrice = { ...state.rangePrice };
      stateCopy.rangePrice.price = action.price;
      return stateCopy;
    case CHANGE_SQUARE:
      stateCopy.rangeSquare = { ...state.rangeSquare };
      stateCopy.rangeSquare.square = action.square;
      return stateCopy;
    case CHANGE_FIRM:
      stateCopy.selectorFirm = { ...state.selectorFirm };
      stateCopy.selectorFirm.selectedValue = action.firm;
      stateCopy.selectorAddress = { ...state.selectorAddress };
      stateCopy.selectorFloor = { ...state.selectorFloor };
      if (action.firm === 'all') {
        stateCopy.selectorAddress.listValue = [
          { id: 0, value: 'all', label: 'Все' },
          { id: 1, value: '27/1', label: 'Героев 120 дивизии 27/1' },
          { id: 2, value: '27/2', label: 'Героев 120 дивизии 27/2' },
          { id: 3, value: '27/4', label: 'Героев 120 дивизии 27/4' },
          { id: 4, value: '27/5', label: 'Героев 120 дивизии 27/5' },
          { id: 5, value: '23A', label: 'Героев 120 дивизии 23А' },
        ];
        stateCopy.selectorAddress.selectedValue = 'all';
        mas.push({ id: 0, value: 'all', label: 'Все' });
        for (let i = 1; i < 5; i++) {
          mas.push({ id: i, value: `${i}`, label: i });
        }
        stateCopy.selectorFloor.listValue = [...mas];
        stateCopy.selectorFloor.selectedValue = 'all';
      } else if (action.firm === 'firma') {
        stateCopy.selectorAddress.listValue = [
          { id: 0, value: 'all', label: 'Все' },
          { id: 1, value: '27/1', label: 'Героев 120 дивизии 27/1' },
          { id: 2, value: '27/2', label: 'Героев 120 дивизии 27/2' },
          { id: 3, value: '27/4', label: 'Героев 120 дивизии 27/4' },
          { id: 4, value: '27/5', label: 'Героев 120 дивизии 27/5' },
        ];
        stateCopy.selectorAddress.selectedValue = 'all';
        mas.push({ id: 0, value: 'all', label: 'Все' });
        for (let i = 1; i < 5; i++) {
          mas.push({ id: i, value: `${i}`, label: i });
        }
        stateCopy.selectorFloor.listValue = [...mas];
        stateCopy.selectorFloor.selectedValue = 'all';
      } else if (action.firm === 'firma+') {
        stateCopy.selectorAddress.listValue = [{ id: 0, value: '23A', label: 'Героев 120 дивизии 23А' },
        ];
        stateCopy.selectorAddress.selectedValue = '23A';
        mas.push({ id: 0, value: 'all', label: 'Все' });
        for (let i = 1; i < 12; i++) {
          mas.push({ id: i, value: `${i}`, label: i });
        }
        stateCopy.selectorFloor.listValue = [...mas];
        stateCopy.selectorFloor.selectedValue = 'all';
      }
      return stateCopy;
    case CHANGE_ADDRESS:
      stateCopy.selectorAddress = { ...state.selectorAddress };
      stateCopy.selectorAddress.selectedValue = action.address;
      stateCopy.selectorFloor = { ...state.selectorFloor };
      switch (action.address) {
        case '27/1':
          stateCopy.selectorFloor.listValue = [
            { id: 0, value: 'all', label: 'Все' },
            { id: 1, value: '1', label: '1' },
            { id: 2, value: '2', label: '2' },
            { id: 3, value: '3', label: '3' },
            { id: 4, value: '4', label: '4' },
          ];
          stateCopy.selectorFloor.selectedValue = 'all';
          return stateCopy;
        case '27/2':
          stateCopy.selectorFloor.listValue = [
            { id: 0, value: '1', label: '1' },
          ];
          stateCopy.selectorFloor.selectedValue = '1';
          return stateCopy;
        case '27/4':
          stateCopy.selectorFloor.listValue = [
            { id: 0, value: 'all', label: 'Все' },
            { id: 1, value: '1', label: '1' },
            { id: 2, value: '2', label: '2' },
            { id: 3, value: '3', label: '3' },
            { id: 4, value: '4', label: '4' },
            { id: 5, value: '5', label: '5' },
            { id: 6, value: '6', label: '6' },
            { id: 7, value: '7', label: '7' },
          ];
          stateCopy.selectorFloor.selectedValue = 'all';
          return stateCopy;
        case '27/5':
          stateCopy.selectorFloor.listValue = [
            { id: 0, value: '1', label: '1' },
          ];
          stateCopy.selectorFloor.selectedValue = '1';
          return stateCopy;
        case '23A':
          mas.push({ id: 0, value: 'all', label: 'Все' });
          for (let i = 1; i < 12; i++) {
            mas.push({ id: i, value: `${i}`, label: i });
          }
          stateCopy.selectorFloor.listValue = [...mas];
          stateCopy.selectorFloor.selectedValue = 'all';
          return stateCopy;
        default: return stateCopy;
      }
    case CHANGE_FLOOR:
      stateCopy.selectorFloor = { ...state.selectorFloor };
      stateCopy.selectorFloor.selectedValue = action.floor;
      return stateCopy;
    case CHANGE_CURRENCY:
      stateCopy.currency = action.currency;
      return stateCopy;
    default: return stateCopy;
  }
};

export default searchRentalAdsReducer;
