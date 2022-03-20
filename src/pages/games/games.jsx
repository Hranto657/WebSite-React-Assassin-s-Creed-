import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Akardion from "./akardion";
import style from "./games.module.scss";

export default function Games(props) {
  const { t } = useTranslation();

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1 className={style.h1}>{t("Игры Серии")}</h1>
        <button className={style.btn}>
          <Link className={style.link} to="/catalog">
            {t("Перейти в Магазин")}
          </Link>
        </button>
      </div>
      <ul>
        {props.json.map((game) => (
          <div className={style.akard}>
            <div>
              <li className={style.list} key={game.id}>
                <h3 className={style.title}>{t(game.name)}</h3>
                <div className={style.desc}>{t(game.desc)}</div>
              </li>
            </div>
            <div>
              <Akardion text={game.text} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
