import React, { Component } from 'react';
import {
  Wrapper, Item, Label, Field, ErrorMessage, Btn,
} from './style';

class UserEdit extends Component {
  componentDidMount() {
    if (this.props.userProfile.email === '') { this.props.userProfileView(); }
  }

  render() {
    const {
      login, errorLogin, email, errorEmail, dataReg, firma, errorFirma, unp, errorUnp, address, errorAddress, tel, errorTel, status,
    } = this.props.userProfile;
    const { ...ownProps } = this.props;
    return (
      <Wrapper>
        <h1>Редактор данных</h1>
        <Item>
          <Label>Логин</Label>
          <Field type="text" onInput={event => this.props.changeLogin(event.target.value)} value={login} />
          {errorLogin && status !== 'exist' && <ErrorMessage>Неверно введен Login</ErrorMessage> }
          {errorLogin && status === 'exist' && <ErrorMessage>Пользователь с таким логином существует</ErrorMessage> }
        </Item>
        <Item>
          <Label>EMAIL</Label>
          <Field type="text" onInput={event => this.props.changeEmail(event.target.value)} value={email} />
          {errorEmail && status !== 'exist' && <ErrorMessage>Неверно введен EMAIL</ErrorMessage> }
          {errorEmail && status === 'exist' && <ErrorMessage>Пользователь с таким email существует</ErrorMessage> }
        </Item>
        <Item>
          <Label>Дата регистрации</Label>
          <div>{dataReg.split('T')[0]}</div>
        </Item>
        <Item>
          <Label>Фирма</Label>
          <Field type="text" onInput={event => this.props.changeFirma(event.target.value)} value={firma} />
          {errorFirma && <ErrorMessage>Неверно введено название фирмы</ErrorMessage> }
        </Item>
        <Item>
          <Label>УНП</Label>
          <Field type="text" onInput={event => this.props.changeUnp(event.target.value)} value={unp} />
          {errorUnp && status !== 'exist' && <ErrorMessage>Неверно введен УНП</ErrorMessage> }
          {errorUnp && status === 'exist' && <ErrorMessage>Пользователь с таким УНП существует</ErrorMessage> }
        </Item>
        <Item>
          <Label>Адрес</Label>
          <Field type="text" onInput={event => this.props.changeAddress(event.target.value)} value={address} />
          {errorAddress && <ErrorMessage>Неверно введен Адрес</ErrorMessage> }
        </Item>
        <Item>
          <Label>Телефон</Label>
          <Label>+375</Label>
          <Field type="text" onInput={event => this.props.changeTel(event.target.value)} value={tel} />
          {errorTel && status !== 'exist' && <ErrorMessage>Неверно введен телефон</ErrorMessage> }
          {errorTel && status === 'exist' && <ErrorMessage>Пользователь с таким телефоном существует</ErrorMessage> }
        </Item>
        <Item>
          <Btn onClick={() => { this.props.fetchEditRequestUser(ownProps.history); }}>Сохранить изменения</Btn>
        </Item>
      </Wrapper>
    );
  }
}

export default UserEdit;
