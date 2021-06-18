import styled from "styled-components";
import "./styles.css";

export const MyPage = () => {
  return (
    <My>
      <h1>Monster好きのページです</h1>
      <p>最近モンスターの定期お得便を辞めました</p>
    </My>
  );
};

const My = styled.div`
  padding:10px auto;
  font-family: "RocknRoll One";
`;