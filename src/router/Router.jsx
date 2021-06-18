import { Switch, Route } from "react-router-dom";
import { MyPage } from "../MyPage";
import { Page404 } from "../Page4040";
import { IntroRoutes } from "./IntroRoutes";
import { MonsterRoutes } from "./MonsterRoutes";
import "../styles.css"

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MyPage />
      </Route>
      <Route
        path="/Intro"
        render={({ match: { url } }) => (
          <Switch>
            {IntroRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/MonsterMain"
        render={({ match: { url } }) => (
          <Switch>
            {MonsterRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

