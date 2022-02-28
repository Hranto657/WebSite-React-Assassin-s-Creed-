import { React, useState } from "react";
import style from "./Catalog.module.scss";

export default function Catalog({ catalogItems, setCatalogItems }) {
  return <Card items={catalogItems} setCatalogItems={setCatalogItems} />;
}

const Clicks = ({ evt, items, setCatalogItems }) => {
  const [count, setCount] = useState(evt.basketCount);
  const [sale, setSale] = useState(evt.sale);

  const countPlus = () => {
    setCount(count + 1);
    if (count + 1 === 5) {
      setSale(sale + 25 < 100 ? sale + 25 : 100);
    }
  };
  const countMinus = () => { 
    if (count >= 1) {
      setCount(count - 1);
      if (count === 5) {
        setSale(sale - 25 > 0 ? sale - 25 : 0);
      }
    }
  };
  const addToBasket = () => {
    evt.basketCount = count;
    setCatalogItems([...items]);
  };
  return (
    <>
      <div className={style.add}>
        <div className={style.price}>
          <p>{evt.price}$</p>
          <p>{sale}%</p>
          <p>{evt.price * (100 - sale) / 100}$</p>
        </div>
        <div>
          Total Price: {count * evt.price * (100 - sale) / 100}$
        </div>
        <div>
          <button onClick={countMinus} className={style.mnbtn}></button>
          <span className={style.count}>{count}</span>
          <button onClick={countPlus} className={style.plbtn}></button>
        </div>
      </div>
      <button onClick={addToBasket} className={style.basket}>
        Add a Backet
      </button>
    </>
  );
};

const Card = ({ items, setCatalogItems }) => {
  const [price, setPrice] = useState(items.price);

  return (
    <div className={style.bigbox}>
      {items.map((evt) => {
        return (
          <div className={style.card} key={evt.id}>
            <img src={evt.image} alt="product" className={style.img} />
            <div className={style.body}>
              <h1>{evt.name}</h1>
              <p>{evt.year}</p>
            </div>
            <Clicks evt={evt} items={items} setCatalogItems={setCatalogItems} />
          </div>
        );
      })}
    </div>
  );
};
