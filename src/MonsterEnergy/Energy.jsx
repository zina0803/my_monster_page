import Energy_title from "./Monster_Energy.webp"
import EN from "./Energy_png.webp"
import styled from "styled-components";
import "../styles.css";

export const Energy = () => {
    return (
      <div>
        <Energy_img src={EN}/>
        <Energy_tit src={Energy_title}/>
        <ME>
          <h1>モンスターエナジー</h1>
          <p>Monster Energyの世界を体感せよ！</p>
          <p>アメリカで生まれ、世界中で一大ブームを巻き起こしているエナジードリンク、</p>
          <p>Monster! 誰もがハマる爽快感とパンチのあるテイスト。</p>
          <p>日本のMonsterファンのために、独自のエナジーブレンドを実現、</p>
          <p>Monsterならではのゾクゾク感を体感せよ。</p>
          <p>ひと口飲めば、世界中のアスリートやミュージシャン、</p>
          <p>そして 世界中のMonster ファンが熱狂するワケを実感できるはず！</p>
          <p>Unleash the Beast!</p>
          <p>Flavor Profile: 爽快感とパンチのある味</p>
        </ME>
      </div>
    );
};

const ME = styled.div`
  font-family: "RocknRoll One";
  font-size:20px;
`;

const Energy_img = styled.img`
  float:left;
  width: 220px;
  height: 540px;
  padding-left:250px;
`;

const Energy_tit = styled.img`
  width: 280px;
  height: 150px;
`;