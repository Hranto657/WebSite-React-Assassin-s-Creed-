import React from "react";
import { useTranslation } from "react-i18next";
import style from "../Persons.module.scss";
import Akardion from "./Akardion";

function Characters(props) {
  const { t } = useTranslation();

  
  return (
    <div className={style.sidebar}>
      {props.persons.map((pers) => {
        return (
          <>
            <div className={style.akard}>
              <div className={style.akarditem}>
                <h1 className="text-center">{t(pers.name)}</h1>
              </div>
              <Akardion persons={pers.info}/>
            </div>
          </>
        );
      })}
      
    </div>
  );
}

export default Characters;
