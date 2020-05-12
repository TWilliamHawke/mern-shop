import React from 'react';
import './categories.scss'
import useUserType from 'src/hooks/useUserType'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Categories = ({userType, categories}) => {
  const history = useHistory()
  const {isUser} = useUserType(userType)

  return (
    <div>
      <h3>Categories</h3>
      <ul className='categories'>
        {Object.entries(categories).map(cat => {
          const location = {pathname: `/catalog/${cat[0]}/`, state: cat[1]}
          return(
            <li 
              key={cat[0]} 
              onClick={() => history.push(location)}>
              {cat[1]}
            </li>
          )
        })}
      </ul>
      {isUser && <button className='custom-config'>Custom Config</button>}
    </div>
  );
};

const mapStateToProps = ({auth: {userType}, global: {categories}}) => ({
  userType, categories
})

export default connect(mapStateToProps)(Categories);