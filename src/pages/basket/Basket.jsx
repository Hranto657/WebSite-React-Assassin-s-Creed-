import React from "react";
import style from "./Basket.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Basket({
  
  catalogItems,
  filteredCatalogItems,
  setCatalogItems,
}) {
  const removeFromBasket = (item) => {
    item.basketCount = 0;
    setCatalogItems([...catalogItems]);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Вы удалили из корзины",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className={style.bigbox}>
        {filteredCatalogItems.map((item) => (
          <div key={item.id} className={style.card}>
            <div className={style.body}>
              <div className={style.text}>
                <img src={item.photo} alt="img" />
                <h1>{item.name}</h1>
                <p>{item.year}</p>
              </div>
              <div className={style.sum}>
                <p>{item.basketCount}pcs</p>
                <h1 className={style.total}>
                  Tot.Price:{" "}
                  <span>
                    {((item.price * (100 - item.sale)) / 100) *
                      item.basketCount}
                    $
                  </span>
                </h1>
              </div>
            </div>
            <button
              className={style.basket}
              type="button"
              onClick={() => removeFromBasket(item)}
            >
              {t("Удалить из корзины")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
