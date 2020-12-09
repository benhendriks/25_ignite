import React, { useState } from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from '../img/logo.svg';
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.3); 
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    background: #ff0000;
    color: #fff;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(''); 
  
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({type: "CLEAR_SEARCHED"});
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo"/>
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text"/>
        <button onClick={submitSearch} type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

export default Nav;