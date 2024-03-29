import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../asset/logo.png';

export default function Header(props) {
    const navigate = useNavigate();
  return (
   <Container>
    <div className='logo'>
        <img src={logo} alt='logo'/>
        <button onClick={()=> navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
        </button>

    </div>
   </Container>
  )
}
const Container = styled.header`
padding: 0 4rem;
.logo {
  img {
    height: 5rem;
  }
}
button {
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
}
`;




