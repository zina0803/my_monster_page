import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, NavLink, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import styled from 'styled-components'
import { Khaos } from './Khaos'
import { Pipeline } from './Pipeline'
import { Ultra } from './Ultra'
import { Energy } from './Energy'
import "../styles.css";

// export const Monster = () => {
//   return (
//     <div>
//       <h1>MonsterPage</h1>
//       <Link to="/Monster/Pipeline">モンスターパイプラインパンチ</Link>
//       <br />
//       <Link to="/Monster/Khaos">モンスターカオス</Link>
//     </div>
//   );
// };


export const MonsterMain = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const tabs = [
    { index: 0, content: <Energy/> },
    { index: 1, content: <Khaos/> },
    { index: 2, content: <Ultra/> },
    { index: 3, content: <Pipeline/> },
  ]
  return (
    <Root>
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.index} onClick={() => setTabIndex(tab.index)}>
            {tab.index}
          </button>
        ))}
      </div>
      <TransitionGroup className="wrapper">
        <CSSTransition key={tabIndex} classNames="slide" timeout={1500}>
          <div className="main">{tabs[tabIndex].content}</div>
        </CSSTransition>
      </TransitionGroup>
    </Root>
  )
}

// export const MonsterMain = () => {
//   const location = useLocation();

//   return (
//     <>
//       <Snav>
//         <NavLink to="/MonsterMain/Energy" exact>
//           Energy
//         </NavLink>
//         <NavLink to="/MonsterMain/Khaos">Khaos</NavLink>
//         <NavLink to="/MonsterMain/Ultra">Ultra</NavLink>
//         <NavLink to="/MonsterMain/Pipeline">Pipeline</NavLink>
//       </Snav>

//       <SlideRoutes location={location}>
//         <Route path="/MonsterMain/Energy" component={Energy} exact />
//         <Route path="/MonsterMain/Khaos" component={Khaos} />
//         <Route path="/MonsterMain/Ultra" component={Ultra} />
//         <Route path="/MonsterMain/Pipeline" component={Pipeline} />
//       </SlideRoutes>
//     </>
//   );
// };


const Root = styled.div`
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 1500ms ease-in-out;
  }
  .slide-exit {
    transform: translateX(0%);
  }
  .slide-exit-active {
    transform: translateX(-100%);
    transition: transform 1500ms ease-in-out;
  }
  padding: 5px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .wrapper {
    position: relative;
    border: slid 1px #444;
    flex: 1;
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
  }
`

