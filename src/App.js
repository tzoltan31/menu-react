import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [categoryArr, setCategoryArr] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  let tempArr = ["all"];
  let arrayByCategory = [];

  const setCategory = (name) => {
    setCurrentCategory(name);
  };
  useEffect(() => {
    items.forEach((item) => {
      if (!tempArr.includes(item.category)) {
        tempArr.push(item.category);
      }
    });
    setCategoryArr(tempArr);
  }, []);

  useEffect(() => {
    if (currentCategory === "all") {
      arrayByCategory = items;
    } else {
      arrayByCategory = items.filter((item) => {
        return item.category === currentCategory;
      });
    }
  }, [currentCategory]);

  return (
    <main>
      <h2 className="title">Our Menu</h2>
      <div className="title__underline"></div>
      <section className="category-list-container">
        {categoryArr.map((category, index) => {
          return (
            <Categories key={index} setCategory={setCategory} name={category} />
          );
        })}
      </section>
      <section className="menu-container">
        {currentCategory === "all"
          ? items.map(({ id, title, category, price, img, desc }) => {
              return (
                <Menu
                  key={id}
                  title={title}
                  category={category}
                  price={price}
                  img={img}
                  desc={desc}
                />
              );
            })
          : items
              .filter((item) => {
                return item.category === currentCategory;
              })
              .map(({ id, title, category, price, img, desc }) => {
                return (
                  <Menu
                    key={id}
                    title={title}
                    category={category}
                    price={price}
                    img={img}
                    desc={desc}
                  />
                );
              })}
      </section>
    </main>
  );
}

// <Menu
//   key={id}
//   title={title}
//   category={category}
//   price={price}
//   img={img}
//   des={desc}
// />
// { id, title, category, price, img, desc }
export default App;
