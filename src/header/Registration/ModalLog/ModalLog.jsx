import React, { useEffect, useState } from "react";
import style from "./Modallog.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function ModalLog({ setActiveLog }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Пустое поле");
  const [passwordError, setPasswordError] = useState("Пустое поле");
  const [formValid, setFormValid] = useState(false);

  function clickButton () {
    if(!formValid) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Вы неправильно заполнили форму',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Добро Пожаловать',
        showConfirmButton: false,
        timer: 1500
      })
      window.location = "/";
    }
  }

  
  useEffect(()=>{
    if(emailError || passwordError) {
      setFormValid(false)
    }else {
      setFormValid(true)
    }

  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase()) || localEmail !== e.target.value) {
      setEmailError("Некорректный Е-Мейл");
    }else {
      setEmailError("");
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 8 || localPass !== e.target.value)  {
      setPasswordError("Пароль должен быть длинне 3 и меньше 8")
      if(!e.target.value) {
      setPasswordError("Пароль пустой");
      }
    }else {
      setPasswordError("");
    }
  }


  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch(e.target.name) {
      case "email" :
        setEmailDirty(true)
        break;
      case "password" :
        setPasswordDirty(true)
        break;
    }
  }
  useEffect(() => {
    document.getElementById("root").style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.getElementById("root").style.overflow = null;
      document.body.style.overflow = null;
    };
  }, []);

  const localEmail = localStorage.getItem("email");
  const localPass =  localStorage.getItem("pass");

  return (
    <div className={style.modal} onClick={() => setActiveLog(false)}>
      <div
        className={style.modalContent}
        style={{
          backgroundImage:
            "url(https://sportshub.cbsistatic.com/i/2021/08/09/60abfee2-ff06-4075-a079-ad3a51f05024/assassins-creed-1265634.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={style.main}>
          {emailDirty && emailError && (
            <div style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}>
              {emailError}
            </div>
          )}
          <input
            onChange={e => emailHandler(e)}
            name="email"
            value={email}
            onBlur={e => blurHandler(e)}
            type="email"
            placeholder={t("Е-Мейл")}
            className={style.input}
          ></input>
          {passwordDirty && passwordError && (
            <div style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}>
              {passwordError}
            </div>
          )}
          <input
            onChange={e => passwordHandler(e)}
            name="password"
            value={password}
            onBlur={e => blurHandler(e)}
            type="password"
            placeholder={t("Пароль")}
            className={style.input}
          ></input>
          <div className={style.check}>
            <input type="checkbox"></input>
            <p>{t("Запомнить Меня")}</p>
          </div>
          <div className={style.mainbtn}>
            <button type="button" className={style.signinbtn} onClick={clickButton}>{t("Вход")}</button>
            <button type="reset" className={style.clearbtn}>{t("Отмена")}</button>
          </div>
        </form>
        <p></p>
      </div>
    </div>
  );
}
