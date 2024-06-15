import { Link } from 'react-router-dom'
import {footer_logo, socialIcons} from '../assets'
import { contactInfo, navLinks } from '../constant'

const Footer = () => {
  return (
    <footer className="bg-black pt-14 px-4 md:px-8">
      <div className="container mx-auto text-white flex max-lg:flex-wrap max-lg:gap-8 justify-between pb-14">
        <div>
          <img src={footer_logo} alt="Brand Icon" />
        </div>
        <div className="flex lg:gap-48 gap-24 font-medium">
          <div>
            <p className='footer_title'>Information</p>
            <ul className='grid gap-y-4 text-sm'>
              {navLinks.map(link => (  
                  <li key={link}><Link className='text-sm hover:underline underline-offset-2' to={link !== 'Main' ? `/${link.toLowerCase()}` : '/'}>{link}</Link></li>              
              ))}
            </ul>
          </div>
          <div>
            <p className='footer_title'>Contacts</p>
            <ul className='grid gap-4'>
              {contactInfo.map((info, index) => (
                <li key={index} className='flex gap-2 items-center'><img src={info.img} alt={`${info.img.split('/').pop().replace('.svg', '')} icon`} />
                  <span>{Array.isArray(info.address) ? info.address.map((addr, index) => (index ? addr : <span key={index}>{addr} <br /></span>)) : info.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className='footer_title'>Social Media</p>
          <div className="flex gap-8">
            {socialIcons.map((icon, index) => <img key={index} src={icon} alt={`${icon.split('/').pop().replace('.svg', '')} icon`} />)}
          </div>
        </div>
      </div>
      <hr className='text-grey-500' />
      <div className="text-center text-grey-500 py-6">&copy; {new Date().getFullYear()} All Rights Reserved</div>
    </footer>
  )
}

export default Footer