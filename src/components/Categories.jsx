import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li key={el} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Categories };