import { Intro } from "../Introduce/Intro";
import { High } from "../Introduce/High";
import { Univ } from "../Introduce/Univ";

export const IntroRoutes = [
  {
    path: "/",
    exact: true,
    children: <Intro />
  },
  {
    path: "/High",
    exact: false,
    children: <High />
  },
  {
    path: "/Univ",
    exact: false,
    children: <Univ />
  }
];