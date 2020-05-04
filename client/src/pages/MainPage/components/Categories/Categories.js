import React from 'react';
import './categories.scss'
import useUserType from 'src/hooks/useUserType'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Categories = ({userType}) => {
  const history = useHistory()
  const {isUser} = useUserType(userType)
  const names = [
    {title: 'CPU', link: 'cpu'},
    {title: 'Motherboards', link: 'motherboards'},
    {title: 'Graphic Cards', link: 'graphic'},
    {title: 'CPU Cooling', link: 'coolings'},
    {title: 'Memory', link: 'memory'},
    {title: 'Storage', link: 'storage'},
    {title: 'Cases', link: 'cases'},
    {title: 'Case Fans', link: 'fans'},
    {title: 'Power Supplies', link: 'power'},
  ]

  return (
    <div>
      <h3>Categories</h3>
      <ul className='categories'>
        {names.map(({title, link}) => {
          const location = {pathname: `/catalog/${link}/`, state: title}
          return(
            <li 
              key={link} 
              onClick={() => history.push(location)}>
              {title}
            </li>
          )
        })}
      </ul>
      {isUser && <button className='custom-config'>Custom Config</button>}
    </div>
  );
};

const mapStateToProps = ({auth: {userType}}) => ({userType})

export default connect(mapStateToProps)(Categories);