import React from 'react';

type CategoriesProps = {
  value: number,
  onChangeCategory: any
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
