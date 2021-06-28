import React from "react";

const Categories = ({ name, setCategory }) => {
  return (
    <button onClick={() => setCategory(name)}>
      <h4>{name}</h4>
    </button>
  );
};

export default Categories;
