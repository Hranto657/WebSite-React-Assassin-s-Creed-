import React from "react";
import { Link } from "react-router-dom";
import style from "./games.module.scss";


export default function Games(props) {
  return(
    <div className="main">
      <h1 className={style.h1}>Games series</h1>
      <ul>
        {props.json.map((game) => (
          <li className={style.list} key={game.id}>
            <h3 className={style.title}>{game.name}</h3>
            <div className={style.desc}>{game.desc}</div>
          </li>
        ))}
      </ul>
      <button className={style.btn}>
        <Link className={style.link} to="/catalog">Click for Buy Games</Link>
      </button>
    </div>
  )
}



