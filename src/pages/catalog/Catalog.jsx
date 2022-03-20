import { React, useState } from "react";
import style from "./Catalog.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Catalog({ catalogItems, setCatalogItems }) {
  return <Card items={catalogItems} setCatalogItems={setCatalogItems} />;
}

const Clicks = ({ evt, items, setCatalogItems }) => {

  const { t } = useTranslation();

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
    if(count === 0) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Вы не выбрали кол-во продукта',
        showConfirmButton: false,
        timer: 1500
      })
    }else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Вы добавили товар в корзину',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  };
  return (
    <>
      <div className={style.add}>
        <div className={style.price}>
          <p>{evt.price}$</p>
          <p className={style.sale}>{sale}%</p>
          <p>{(evt.price * (100 - sale)) / 100}$</p>
        </div>
        <div className={style.total}>{t("Обшая цена:")}<span>{(count * evt.price * (100 - sale)) / 100}$</span></div>
        <div>
          <button onClick={countMinus} className={style.mnbtn}></button>
          <span className={style.count}>{count}</span>
          <button onClick={countPlus} className={style.plbtn}></button>
        </div>
      </div>
      <button onClick={addToBasket} className={style.basket}>
        {t("Добавить")}
      </button>
    </>
  );
};

const Card = ({ items, setCatalogItems }) => {
  return (
    <div className={style.bigbox}>
      {items.map((evt) => {
        return (
          <div className={style.card} key={evt.id}>
            <div className={style.body}>
              <img src={evt.photo} alt="logo"/>
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
