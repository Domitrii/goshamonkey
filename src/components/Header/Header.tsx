import { NavLink } from 'react-router'
import css from './Header.module.css'

function Header() {
  return (
    <div className={css.navBar}>
      <div className={css.navBarContent}>
        <NavLink to='/' className={css.logoL}>
          <p className={css.logoC}>
            <img src="../../public/logo.png" alt="Monkey-logo" className={css.logo} />
          </p>
        </NavLink>
        <div className={css.header}>
          <ul className={css.list}>
            <li className={css.listComponent}>
              <NavLink to="/hi-price" className={css.hiPrice}>
                Привет от макаки
              </NavLink>
            </li>
            <li className={css.listComponent}>
              <NavLink to="/courses" className={css.course}>
                Курсы
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header