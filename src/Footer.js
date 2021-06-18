import React from 'react';
import styled from "styled-components";
import "./styles.css";

class Footer extends React.Component {
  render() {
    return (
      <Sfooter>
        <Sfooter_logo>MonsterPage</Sfooter_logo>
        <Sfooter_list>
          <li>お問い合わせ</li>
        </Sfooter_list>
      </Sfooter>
    );
  }
}

export default Footer;

const Sfooter = styled.div`
  background-color: #333333;
  color:#fff;
  height: 120px;
  padding:40px;
  font-family: "RocknRoll One";
`;

const Sfooter_logo = styled.div`
  font-size:32px;
  float:left;
`;

const Sfooter_list = styled.ul`
  float:right;
`;

const Sfooter_li = styled.li`
  padding-bottom:20px;
`;