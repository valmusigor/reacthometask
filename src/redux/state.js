let renderEntireTree = () => {
  console.log('State changes');
};
const state = {
  itemsHeader: [
    { path: '/', name: 'Главная' },
    { path: '#', name: 'Новости' },
    { path: '/friends', name: 'Лучшие друзья' },
    { path: '#', name: 'Контакты' },
  ],
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
};
export const formWorker = {
  inputLogin: (login) => {
    state.signIn.valueLogin = login;
    const str = login.trim();
    const result = str.match(/@/gi);
    if (result === null) {
      state.signIn.disabled = true;
      state.signIn.statusLogin = false;
      state.signIn.displayErrorEmail = 'inline';
    } else if (result.length > 1) {
      state.signIn.disabled = true;
      state.signIn.displayErrorEmail = 'inline';
    } else if (result.length === 1 && state.signIn.statusPassword) {
      state.signIn.disabled = false;
      state.signIn.displayErrorEmail = 'none';
    } else {
      state.signIn.statusLogin = true;
      state.signIn.displayErrorEmail = 'none';
    }
    renderEntireTree();
  },
  inputPass: (password) => {
    state.signIn.valuePass = password;
    const str = password.trim();
    if (str.length < 4) {
      state.signIn.disabled = true;
      state.signIn.statusPassword = false;
      state.signIn.displayErrorPass = 'inline';
    } else if (state.signIn.statusLogin) {
      state.signIn.disabled = false;
      state.signIn.displayErrorPass = 'none';
    } else {
      state.signIn.statusPassword = true;
      state.signIn.displayErrorPass = 'none';
    }
    renderEntireTree();
  },
  clickAuth: () => {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:
        JSON.stringify({
          login: state.signIn.valueLogin,
          pass: state.signIn.valuePass,
        }),
    })
      .then(res => res.json())
      .then((result) => {
        if (JSON.parse(result).status == 'ok') {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('id', JSON.parse(result).id);
          renderEntireTree();
        } else {
          localStorage.setItem('auth', 'false');
          state.signIn.valueLogin = '';
          state.signIn.valuePass = '';
          state.signIn.statusLogin = false;
          state.signIn.statusPassword = false;
          state.signIn.disabled = true;
          state.signIn.displayErrorEmail = 'inline';
          state.signIn.displayErrorPass = 'inline';
          renderEntireTree();
        }
      });
  },
};
export const observer = (subscriber) => {
  renderEntireTree = subscriber;
};
export default state;
