import React from "react";

function CategoryFilter({ selectedCategory, onSelectCategory, categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          key={index}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

