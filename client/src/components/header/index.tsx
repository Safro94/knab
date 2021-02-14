import { Link } from 'react-router-dom';

import Icon from '../../components/icon';

import { HOME } from '../../constants/routes';

import './index.scss'

const Header = () => {
  return (
    <header className='header'>
      <Icon name='logo' classes='header__icon' />

      <ul className='header__links'>
        <li><Link to={HOME} className='header__link'>Home</Link></li>
        <li><Link to='!#' className='header__link'>Pricing</Link></li>
        <li><Link to='!#' className='header__link'>Contact us</Link></li>
      </ul>
    </header>
  )
}

export default Header
