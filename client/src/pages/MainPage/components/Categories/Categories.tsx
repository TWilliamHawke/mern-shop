import React, { FC } from 'react';
import './categories.scss'
// import useUserType from 'src/hooks/useUserType'
import { Link } from 'react-router-dom';
import { useCategories } from 'src/hooks/useCategories';

export const Categories: FC = () => {

  const {categories} = useCategories()

  return (
    <>
      <h3>Categories</h3>
      <ul className='categories'>
        {Object.entries(categories).map(cat => {
          return(
            <li key={cat[0]} >
              <Link to={`/catalog/${cat[0]}/`}>
                {cat[1]}
              </Link>
            </li>
          )
        })}
      </ul>
      {/* {isUser && <button className='custom-config'>Custom Config</button>} */}
    </>
  );
};


export default Categories;