const store = {
  renderEntireTree() {
    console.log('State changes');
  },
  state: {
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
  },
  formWorker: {
    inputLogin(login, type) {
      let elem;
      if (type === 'signin') { elem = this.state.signIn; } else { elem = this.state.signUp; }
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
      this.renderEntireTree();
    },
    inputPass(password, type) {
      let elem;
      if (type === 'signin') { elem = this.state.signIn; } else { elem = this.state.signUp; }
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
      this.renderEntireTree();
    },
    inputPassRep(password) {
      this.state.signUp.valuePassRep = password;
      if (password === this.state.signUp.valuePass) {
        if (this.state.signUp.statusLogin && this.state.signUp.statusPassword) {
          this.state.signUp.disabled = false;
          this.state.signUp.displayErrorPassRep = 'none';
        } else {
          this.state.signUp.statusPasswordRepeat = true;
          this.state.signUp.displayErrorPassRep = 'none';
        }
      } else {
        this.state.signUp.disabled = true;
        this.state.signUp.statusPasswordRepeat = false;
        this.state.signUp.displayErrorPassRep = 'inline';
      }
      this.renderEntireTree();
    },
    clickAuth(type) {
      if (type === 'signin') {
        fetch('/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:
        JSON.stringify({
          login: this.state.signIn.valueLogin,
          pass: this.state.signIn.valuePass,
        }),
        })
          .then(res => res.json())
          .then((result) => {
            if (JSON.parse(result).status == 'ok') {
              localStorage.setItem('auth', 'true');
              localStorage.setItem('id', JSON.parse(result).id);
              this.renderEntireTree();
            } else {
              localStorage.setItem('auth', 'false');
              this.formWorker.setEmptyField('signin');
              this.renderEntireTree();
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
          email: this.state.signUp.valueLogin,
          pass: this.state.signUp.valuePass,
        }),
        })
          .then(res => res.json())
          .then((result) => {
            if (JSON.parse(result).status == 'ok') {
              localStorage.setItem('auth', 'true');
              localStorage.setItem('id', JSON.parse(result).id);
              this.renderEntireTree();
            } else {
              localStorage.setItem('auth', 'false');
              this.formWorker.setEmptyField('signup');
              this.renderEntireTree();
            }
          });
      }
    },
    setEmptyField(type) {
      let elem;
      if (type === 'signin') { elem = this.state.signIn; } else {
        elem = this.state.signUp;
        this.state.signUp.valuePassRep = '';
        this.state.signUp.statusPasswordRepeat = false;
        this.state.signUp.displayErrorPassRep = 'none';
      }
      elem.valueLogin = '';
      elem.valuePass = '';
      elem.statusLogin = false;
      elem.statusPassword = false;
      elem.disabled = true;
      elem.displayErrorEmail = 'inline';
      elem.displayErrorPass = 'inline';
    },
  },
  observer(subscriber) {
    this.renderEntireTree = subscriber;
  },
  getState() {
    return this.state;
  },
};
export default store;
