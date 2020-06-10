import React from 'react';
import './categories.scss'
// import useUserType from 'src/hooks/useUserType'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Categories = ({userType, categories}) => {
  // const {isUser} = useUserType(userType)

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

const mapStateToProps = ({auth: {userType}, global: {categories}}) => ({
  userType, categories
})

export default connect(mapStateToProps)(Categories);