import { useLocation, useHistory } from "react-router-dom";

export const Univ = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();
    return (
      <div>
        <h1>大学時代</h1>
        <p>玉川大学に入学</p>
        <p>ひょんなことからチンパンジーと過ごすことに</p>
        <p>自分もチンパンジーに</p>
        <button onClick={onClickBack}>戻る</button>
      </div>
    );
  };