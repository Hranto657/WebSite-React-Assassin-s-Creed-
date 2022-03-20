import React from "react";
import style from "../header.module.scss";
// import ModalLog from "./ModalLog/ModalLog";
// import ModalReg from "./ModalReg/ModalReg";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Registration(props) {
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={style.flag}>
      <div className={style.items}>
        <form>
          <button
            type="button"
            className={style.regbtn}
            onClick={() => props.setActiveLog(true)}
          >
            {t("Войти")}
          </button>
          <button
            type="button"
            className={style.regbtn}
            onClick={() => props.setActiveReg(true)}
          >
            {t("Регистр")}
          </button>
        </form>
        <select name="language" onChange={onChange} className={style.flagitem}>
          <option value="ru">Rus</option>
          <option value="en">Eng</option>
          <option value="am">Arm</option>
        </select>
      </div>
    </div>
  );
}

export default Registration;
