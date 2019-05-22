import React, { Component } from 'react';
import { Item, Label, Info, Wrapper, Ava, Image, Login } from './style';

class CabinetUser extends Component {
  componentDidMount() {
    this.props.userProfileView();
  }

  render() {
    const {
      login, email, dataReg, firma, unp, address, tel,
    } = this.props.userProfile;
    return (
      <Wrapper>
      <Ava>
      <Image src="http://www.coolwebmasters.com/uploads/posts/2010-03/1269471577_chelavek-00.jpg"/>
        <Login><span>{login}</span></Login>
      </Ava>
      <Info>
        <Item>
          <Label>Email</Label>
          <div>{email}</div>
        </Item>
        <Item>
          <Label>Дата регистрации</Label>
          <div>{dataReg}</div>
        </Item>
        <Item>
          <Label>Место работы</Label>
          <div>{(firma == null) ? 'Незадано' : firma}</div>
        </Item>
        <Item>
          <Label>УНП организации</Label>
          <div>{(unp == null) ? 'Незадано' : unp}</div>
        </Item>
        <Item>
          <Label>Адрес</Label>
          <div>{(address == null) ? 'Незадано' : address}</div>
        </Item>
        <Item>
          <Label>Телефон</Label>
          <div>{(tel == null) ? 'Незадано' : tel}</div>
        </Item>
      </Info>
      </Wrapper>
    );
  }
}
export default CabinetUser;
