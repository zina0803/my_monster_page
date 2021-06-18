import { MonsterMain } from "../MonsterEnergy/MonsterMain";
import { Pipeline } from "../MonsterEnergy/Pipeline";
import { Khaos } from "../MonsterEnergy/Khaos";
import { Ultra } from "../MonsterEnergy/Ultra";
import { Energy } from "../MonsterEnergy/Energy";

export const MonsterRoutes = [
  {
    path: "/",
    exact: true,
    children: <MonsterMain />
  },
  {
    path: "/Energy",
    exact: false,
    children: <Energy />
  },
  {
    path: "/Khaos",
    exact: false,
    children: <Khaos />
  },
  {
    path: "/Ultra",
    exact: false,
    children: <Ultra />
  },
  {
    path: "/Pipeline",
    exact: false,
    children: <Pipeline />
  },
];
