import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import MO from "./MonsterEnergy/MonsterEnergy.png";
import styled from "styled-components";
import React from 'react';
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <Sheader>
        <Link exact to="/"><Sheader_logo src={MO}/></Link>
        <div class="header-list">
          <ul>
            <Sli><Link exact to="/Intro">Self-introduction</Link></Sli>
            <Sli><Link exact to="/MonsterMain">Monster</Link></Sli>
          </ul>
        </div>
      </Sheader>
    );
  }
}

export default Header;

const Sheader = styled.div`
  background-color: #000000;
  color: #fff;
  height: 100px;
`;

const Sheader_logo = styled.img`
  float:left;
  width: 160px;
  height: 75px;
  font-size:36px;
  padding:15px 40px 10px 20px;
`;

const Sli = styled.li`
  list-style: none;
  float: left;
  text-decoration:none;
  padding:33px 20px;
  color: #fff;
  font-size: 20px;
`;

