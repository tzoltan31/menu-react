import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="single-menu-item">
      <img src={img} alt={title}></img>
      <div className="single-menu-item__right-container">
        <div className="single-menu-item__right-container__top">
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
