import React from "react";
import { Link } from "react-router-dom";
import style from "../main.module.scss";
import { useTranslation } from "react-i18next";

let persons = [
  {
    id: 1,
    name: "Альтаир ибн Ла-Ахад",
    background:
      "https://www.pngitem.com/pimgs/m/42-423093_assassins-creed-running-assassins-creed-altair-ibn-la.png",
    year:"11 января 1165 года"  
  },
  {
    id: 2,
    name: "Эцио Аудиторе Да Фиренце",
    background:
      "https://www.wallpaperup.com/uploads/wallpapers/2014/03/29/313537/72f8d0b36aa79452787ddc214690b68a-700.jpg",
    year:"24 июня 1459 года"  
  },
  {
    id: 3,
    name: "Коннор Кенуей",
    background:
      "https://wallpaperbat.com/img/419766-download-1920x1080-connor-kenway-assassins-creed-iii-wallpaper.jpg",
    year:"4 апреля 1756"  
  },
  {
    id: 4,
    name: "Эдвард Кенуей",
    background:
      "https://yt3.ggpht.com/a/AATXAJwf1Jhdrw_LfWQkqNwq24jqhwnqh_NCWPf0NHhA=s900-c-k-c0xffffffff-no-rj-mo",
    year:"10 марта 1693 г."  
  },
  {
    id: 5,
    name: "Арно Дориан",
    background: "https://i.pinimg.com/564x/c0/dc/3a/c0dc3aba92769c2b6acfb562e287e9e3.jpg",
    year:"26 августа 1768 г."  
  },
  {
    id: 6,
    name: "Шао Цзюнь",
    background:
      "https://i.playground.ru/p/W48wJ6pL8-r8moHMyNfkoQ.jpeg",
    year:"7 ноября 1505 г."  
  },
  {
    id: 7,
    name: "Иви и Джейкоб Фрай",
    background:
      "https://p4.wallpaperbetter.com/wallpaper/753/1024/941/assassin-s-creed-assassin-s-creed-syndicate-evie-frye-jacob-frye-wallpaper-thumb.jpg",
    year:"9 ноября 1847 г."  
  },
  {
    id: 8,
    name: "Авелина де Гранпре",
    background:
      "https://www.teahub.io/photos/full/192-1927433_iphone-wallpaper-assassins-creed-black-flag.jpg",
    year:"20 июня 1747 г."  
  },
];
export default function Characters() {
  const { t } = useTranslation();

  return (
    <div className={style.bigbox}>
      {persons.map((item) => (
        <Link to="/persons"
          className={style.box}
          key={item.id}
          style={{
            backgroundImage: `url(${item.background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>{t(item.name)}</h1>
          <p>{t(item.year)}</p>
        </Link>
      ))}
    </div>
  );
}
