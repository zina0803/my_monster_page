import KH from "./Khaos_png.png"
import Khaos_title from "./Monster_Khaos.webp"
import styled from "styled-components";
import "../styles.css";

export const Khaos = () => {
  return (
    <div>
      <Khaos_img src={KH}/>
      <Khaos_tit src={Khaos_title}/>
      <MK>
        <h1>モンスターカオス</h1>
        <p>ただの果汁飲料では物足りないあなたへ！</p>
        <p>常に極限を求めるMonsterのプロアスリート、彼らの声を元に開発されたのが、</p>
        <p>Monster と果汁をブレンドした新感覚のエナジードリンク、Monster Khaos!</p>
        <p>数か月に及ぶ開発期間を経て、Monsterのテイストはそのままに、</p>
        <p>果汁をブレンドすることで斬新なテイストを実現しました。</p>
        <p>カオスが足りないあなたへ・・・</p>
        <p>Monster Khaos</p>
        <p>Monsterと果汁のハイブリッド、口の中ではじける爽快感とあの洗練されたMonsterのテイストをMix、</p>
        <p>きっとあなたもハマるはず！</p>
        <p>Flavor Profile: 30%果汁、100% Monster!</p>
      </MK>
    </div>
  );
};

const MK = styled.div`
  font-family: "RocknRoll One";
  font-size:20px;
`;

const Khaos_img = styled.img`
  float:left;
  width: 220px;
  height: 540px;
  padding-left:250px;
`;

const Khaos_tit = styled.img`
  width: 320px;
  height: 130px;
`;