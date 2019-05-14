import autorizeReducer from './reducer/autorizeReducer.js';
import headerReducer from './reducer/headerReducer.js';

const store = {
  callSubscribe() {
    console.log('State changes');
  },
  state: {
    itemsHeader: {
      itemsMenu: [
        { path: '/', name: 'Главная' },
        { path: '#', name: 'Новости' },
        { path: '/friends', name: 'Лучшие друзья' },
        { path: '#', name: 'Контакты' },
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
    },
    dataAutorize: {
      signIn: {
        valueLogin: '',
        valuePass: '',
        statusLogin: false,
        statusPassword: false,
        disabled: true,
        displayErrorEmail: 'none',
        displayErrorPass: 'none',
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
      },
    },
  },
  async dispatch(action) {
    //
    this.state.dataAutorize = autorizeReducer(this.state.dataAutorize, action);
    this.state.itemsHeader = await headerReducer(this.state.itemsHeader, action);
    setTimeout(() => {
      store.callSubscribe(this.getState());
    }, 1000);
  },
  subscribe(observer) {
    this.callSubscribe = observer;
  },
  getState() {
    return this.state;
  },
};

export default store;