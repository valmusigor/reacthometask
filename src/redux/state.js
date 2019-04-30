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
};
export const formWorker = {
  inputLogin: (login, type) => {
    let elem;
    if (type === 'signin') { elem = state.signIn; } else { elem = state.signUp; }
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
    renderEntireTree();
  },
  inputPass: (password, type) => {
    let elem;
    if (type === 'signin') { elem = state.signIn; } else { elem = state.signUp; }
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
    renderEntireTree();
  },
  inputPassRep: (password) => {
    state.signUp.valuePassRep = password;
    if (password === state.signUp.valuePass) {
      if (state.signUp.statusLogin && state.signUp.statusPassword) {
        state.signUp.disabled = false;
        state.signUp.displayErrorPassRep = 'none';
      } else {
        state.signUp.statusPasswordRepeat = true;
        state.signUp.displayErrorPassRep = 'none';
      }
    } else {
      state.signUp.disabled = true;
      state.signUp.statusPasswordRepeat = false;
      state.signUp.displayErrorPassRep = 'inline';
    }
    renderEntireTree();
  },
  clickAuth: (type) => {
    if (type === 'signin') {
      fetch('/signin', {
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
            formWorker.setEmptyField('signin');
            renderEntireTree();
          }
        });
    } else if (type === 'signup') {
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
        JSON.stringify({
          email: state.signUp.valueLogin,
          pass: state.signUp.valuePass,
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
            formWorker.setEmptyField('signup');
            renderEntireTree();
          }
        });
    }
  },
  setEmptyField: (type) => {
    let elem;
    if (type === 'signin') { elem = state.signIn; } else {
      elem = state.signUp;
      state.signUp.valuePassRep = '';
      state.signUp.statusPasswordRepeat = false;
      state.signUp.displayErrorPassRep = 'none';
    }
    elem.valueLogin = '';
    elem.valuePass = '';
    elem.statusLogin = false;
    elem.statusPassword = false;
    elem.disabled = true;
    elem.displayErrorEmail = 'inline';
    elem.displayErrorPass = 'inline';
  },
};
export const observer = (subscriber) => {
  renderEntireTree = subscriber;
};
export default state;
