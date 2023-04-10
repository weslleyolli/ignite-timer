import { NavLink } from 'react-router-dom'
import logoIgnite from '../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <div className="text-white font-bold text-3xl flex items-center justify-between">
      <img src={logoIgnite} alt="" />
      <nav className="flex gap-2">
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
