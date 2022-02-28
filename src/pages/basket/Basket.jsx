import React from "react";
import style from "./Basket.module.scss";

export default function Basket({ catalogItems, filteredCatalogItems, setCatalogItems }) {
  const removeFromBasket = (item) => {
    item.basketCount = 0;
    setCatalogItems([...catalogItems])
  }
  console.log(filteredCatalogItems);
  return (
    <div className={style.bigbox}>
      {filteredCatalogItems.map((item) => (
        <div key={item.id} className={style.card}>
          <img src={item.image} alt="product" className={style.img}></img>
          <div className={style.body}>
            <h1>{item.name}</h1>
            <p>{item.year}</p>
            <p>{item.basketCount}</p>
            <p>{item.price}</p>
          </div>
          <button className={style.basket} type="button" onClick={() => removeFromBasket(item) }>Remove From Basket</button>
        </div>
      ))}
    </div>
  );
}
