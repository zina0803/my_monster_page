import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import PI from "./Pipeline_png.png"
import Pipeline_title from "./MonsterPipeline.png"
import "../styles.css";

export const Pipeline = () => {
  return (
    <div>
      <Pipekine_img src={PI}/>
      <Pipe_tit src={Pipeline_title}/>
      <MP>
        <h1>モンスターパイプラインパンチ</h1>
        <p>バンザイ・パイプラインはハワイ・オアフ島のノースショアを代表するサーフポイントで、</p>
        <p>冬になると危険な波が炸裂する。</p>
        <p>この壮大な自然の力に敬意を表して、我々はモンスター パイプラインパンチを開発した。</p>
        <p>ハワイで人気のパッションフルーツ、オレンジ、グァバを絶妙にブレンドし、</p>
        <p>Monster独自のエナジーブレンドをふんだんにミックス。</p>
        <p>かのビッグウェーブのように、このパイプラインパンチも伝説となるはずだ！</p>
        <p>Unleash the Beast !</p>
        <p>Flavor Profile: トロピカルフレーバー</p>
      </MP>
    </div>
  );
};

const MP = styled.div`
  font-family: "RocknRoll One";
  font-size:20px;
`;

const Pipekine_img = styled.img`
  float:left;
  width: 190px;
  height: 510px;
  padding-left:250px;
`;

const Pipe_tit = styled.img`
  width: 290px;
  height: 130px;
`;