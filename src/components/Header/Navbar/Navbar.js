import React, {Component} from 'react';
import styled from 'styled-components';
const Wrapper=styled.div`
    display:inline-block;
    vertical-align:top;
`;
const Item=styled.li`
    display:inline-block;
    padding:10px;
`;
const Link=styled.a`
    text-decoration:none;
	color:#cbbde2;
    font-weight:600;
    :hover{
        color:white;
    }
`;
class Navbar extends Component{
    render(){
        return(
            <Wrapper>
						<ul>
							<Item><Link href="#">Главная</Link></Item>
							<Item><Link href="#">Новости</Link></Item>
							<Item><Link href="#">Лучшие друзья</Link></Item>
							<Item><Link href="#">Контакты</Link></Item>
						</ul>
			</Wrapper>
        );
    }
}
export default Navbar;