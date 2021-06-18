import { Link, useHistory } from "react-router-dom";

export const Intro = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>自己紹介です</h1>
      <Link to={{ pathname: "/Intro/High", state: arr }}>高校時代</Link>
      <br />
      <Link to="/Intro/Univ">大学時代</Link>
    </div>
  );
};
