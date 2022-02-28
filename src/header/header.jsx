import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import image from "../images/logo.png";


export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={image} alt="Logo" className={style.img}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`${style.menu} navbar-nav`}>
            {props.json.map ((item)=>(            
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" to={item.href} key={item.id}>{item.name}</Link>
              </li> 
            ))
            }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

