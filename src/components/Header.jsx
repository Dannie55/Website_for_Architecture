import {logo} from  '../assets'
import {navLinks} from '../constant'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
      <header className="container mx-auto flex md:py-8 py-4 justify-between items-center">
        <div className="lg:w-1/3">
          <img src={logo} alt="Brand Icon" />
        </div>
        <nav className="lg:w-2/3">
          <ul className="flex gap-4 sm:gap-12 md:gap-16 lg:gap-28 w-3/4"> {navLinks.map(link => (
            <li key={link}>
              <NavLink to={link !== 'Main' ? `/${link.toLowerCase()}` : '/'} className={({isActive}) => isActive ? 'border-y-2 border-black py-1 md:px-3 px-1 tracking-widest transition-all' : 'tracking-widest hover:text-grey'}>{link.toUpperCase()}</NavLink>
            </li>
          ))} </ul>
        </nav>
      </header>
    )
  }

export default Header