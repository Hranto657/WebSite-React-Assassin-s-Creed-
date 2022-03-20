import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./games.module.scss";

export default function Akardion(props) {
  const { t } = useTranslation();

  const [state, setState] = useState(false);
  const Click = () => {
    setState(!state);
  };
  return (
    <div>
      {state ? (
        <div className={style.maindiv}>
          <button className={style.akardbtn} onClick={Click}>
            <img src="https://i.ebayimg.com/images/g/SlUAAOSwnDZT9iUX/s-l300.jpg" alt="icon"/>
          </button>
        </div>
      ) : (
        <div className={style.maindiv}>
          <p className={style.gametext}>{t(props.text)}</p>
          <button className={style.akardbtn} onClick={Click}>
            <img src="https://forum.xda-developers.com/data/avatars/h/2693/2693736.jpg?1620080750" alt="icon"/>
          </button>
        </div>
      )}
    </div>
  );
}

