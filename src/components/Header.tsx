import { NavLink } from 'react-router-dom'
import logoIgnite from '../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <div>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </div>
  )
}
