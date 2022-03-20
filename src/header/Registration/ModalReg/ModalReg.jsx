import {} from "@testing-library/user-event/dist/utils";
import { React, useEffect, useState } from "react";
import style from "./Modalreg.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function ModalReg({ activeReg, setActiveReg }) {
  const { t } = useTranslation();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameDirty, setFirstnameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameError, setFirstnameError] = useState("Имя пустой");
  const [lastNameError, setLastNameError] = useState("Фамилия пустой");
  const [emailError, setEmailError] = useState("Емейл пустой");
  const [passwordError, setPasswordError] = useState("Пароль пустой");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (firstNameError || lastNameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [firstNameError, lastNameError, emailError, passwordError]);

  function clickButton() {
    if (!formValid) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Вы неправильно заполнили форму",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Регистрация прошла успешно",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const firstNameHandler = (e) => {
    setFirstname(e.target.value);
    const firstName = /^[A-Za-z\s]+$/;
    if (!firstName.test(e.target.value)) {
      setFirstnameError("Некорректная имя");
    } else {
      setFirstnameError("");
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    const lastName = /^[A-Za-z\s]+$/;
    if (!lastName.test(e.target.value)) {
      setLastNameError("Некорректная фамилия");
    } else {
      setLastNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный Е-Мейл");
    } else {
      localStorage.setItem('email', e.target.value);
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен быть длинне 3 и меньше 8");
      if (!e.target.value) {
      setPasswordError("Пароль пустой");
      }
    } else {
      localStorage.setItem('pass', e.target.value);
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "firstName":
        setFirstnameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    document.getElementById("root").style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.getElementById("root").style.overflow = null;
      document.body.style.overflow = null;
    };
  }, []);

  return (
    <div className={style.modal} onClick={() => setActiveReg(false)}>
      <div
        className={style.modalContent}
        style={{
          backgroundImage:
            "url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/01/Assassins-Creed-Arno-Dorian.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={style.main}>
          {firstNameDirty && firstNameError && (
            <div
              style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}
            >
              {firstNameError}
            </div>
          )}
          <input
            onChange={(e) => firstNameHandler(e)}
            value={firstName}
            onBlur={(e) => blurHandler(e)}
            name="firstName"
            type="text"
            className={style.input}
            placeholder={t("Имя")}
          ></input>
          {lastNameDirty && lastNameError && (
            <div
              style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}
            >
              {lastNameError}
            </div>
          )}
          <input
            onChange={(e) => lastNameHandler(e)}
            value={lastName}
            onBlur={(e) => blurHandler(e)}
            name="lastName"
            type="text"
            className={style.input}
            placeholder={t("Фамилия")}
          ></input>
          {emailDirty && emailError && (
            <div
              style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}
            >
              {emailError}
            </div>
          )}
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="email"
            className={style.input}
            placeholder={t("Е-Мейл")}
          ></input>
          {passwordDirty && passwordError && (
            <div
              style={{ color: "#7B191E", fontSize: "20px", fontWeight: "600" }}
            >
              {passwordError}
            </div>
          )}
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            className={style.input}
            placeholder={t("Пароль")}
          ></input>
          <div className={style.mainbtn}>
            <button
              className={style.submitbtn}
              type="button"
              onClick={clickButton}
            >
              {t("Отправить")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
