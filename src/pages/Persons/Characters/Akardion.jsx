import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../Persons.module.scss";

function Akardion(props) {
  const { t } = useTranslation();
  const [boolean, setBoolean] = useState(false);

  const Click = () => {
    setBoolean(!boolean);
  };
  return (
    <div className={style.sidebar}>
      {props.persons.map((pers) => {
        return (
          <>
            {boolean ? (
              <div className={style.content}>
                <div className={style.pers}>
                  <button className={style.akardbtn} onClick={Click}>{t("Закрыть")}</button>
                  <img src={pers.image} alt="pers"></img>
                </div>
                <div className={style.bigbox}>
                  <div className={style.box}>
                    <h1>{t("Национальность")}</h1>
                    <p>{t(pers.nationality)}</p>
                  </div>
                  <div className={style.box}>
                    <h1>{t("Место Рождения")}</h1>
                    <p>{t(pers.country)}</p>
                  </div>
                  <div className={style.box}>
                    <h1>{t("Родной Город")}</h1>
                    <p>{t(pers.city)}</p>
                  </div>
                  <div className={style.box}>
                    <h1>{t("Отец")}</h1>
                    <p>{t(pers.father)}</p>
                  </div>
                  <div className={style.box}>
                    <h1>{t("Мать")}</h1>
                    <p>{t(pers.mother)}</p>
                  </div>
                  <div className={style.box}>
                    <h1>{t("Специальность")}</h1>
                    <p>{t(pers.special)}</p>
                  </div>
                </div>
              </div>
            ) : (
              <button className={style.akardbtn} onClick={Click} >{t("Подробнее")}</button>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Akardion;
