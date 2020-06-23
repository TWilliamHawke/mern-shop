import React from 'react';
import './categories.scss'
// import useUserType from 'src/hooks/useUserType'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Categories = ({categories}) => {
  // const {isUser} = useUserType()

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

const mapStateToProps = ({global: {categories}}) => ({
  categories
})

export default connect(mapStateToProps)(Categories);