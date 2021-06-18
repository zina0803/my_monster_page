import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Router } from "./router/Router";
import Header from './Header';
import Footer from './Footer';
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <SApp>
        <Header />
        <SContainer>
          <Router />
        </SContainer>
        <Footer />
      </SApp>
    </BrowserRouter>
  );
}

const SApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const SContainer = styled.div`
  background-color: #111111;
  color:#fff;
  height: 700px;
  padding:10px auto;
`;