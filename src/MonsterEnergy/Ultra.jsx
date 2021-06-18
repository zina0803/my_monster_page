import UL from "./Ultra_png.webp"
import Ultra_title from "./MonsterUltra.png"
import styled from "styled-components";
import "../styles.css";

export const Ultra = () => {
    return (
      <div>
        <Ultra_img src={UL}/>
        <Ultra_tit src={Ultra_title}/>
        <MU>
          <h1>モンスターウルトラ</h1>
          <p>Monsterアスリートの連中やMonsterガールもそんなやつらだからこそ、</p>
          <p>新商品開発のヒントをくれたのさ。</p>
          <p>スッキリとした味わい、甘さ控えめ、</p>
          <p>それでいてエナジーブレンドをフルにミックス。</p>
          <p>白いラベルがMonsterの新しいトレンドだ。</p>
          <p>ようやく作り上げたこのMonster Energy Ultraで新たな野性を解き放て！</p>
          <p>Unleash The Ultra Beast!</p>
          <p>Flavor Profile: ゼロカロリー・ゼロシュガーで甘さ控えめスッキリ</p>
        </MU>
      </div>
    );
};

const MU = styled.div`
  font-family: "RocknRoll One";
  font-size:20px;
`;

const Ultra_img = styled.img`
  float:left;
  width: 220px;
  height: 540px;
  padding-left:250px;
`;

const Ultra_tit = styled.img`
  width: 320px;
  height: 125px;
`;