import React from "react";
import style from "./main.module.scss";
import Characters from "./Characters/Characters";

export default function Main() {
  return (
    <>
      <div className={`{style.main} container-fluid`}>
        <div className={style.text}>
          <h1 className={style.h1}>
            Assassin <span>'s</span> Creed
          </h1>
        </div>
        <div>
          <Characters />
        </div>
      </div>
    </>
  );
}
