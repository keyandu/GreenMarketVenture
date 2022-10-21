import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

let scroller = Scroll.scroller;
let Element = Scroll.Element;
let animateScroll = Scroll.animateScroll;

export default function Navigation() {
  return (
    <Element name='intro'>
      <nav className='flex fixed items-center justify-between bg-red500 h-19 w-full p-7 bg-black  text-white z-50'>
        <div className=''>
          <ul className='flex items-end justify-center gap-5 place-content-end cursor-pointer'>
            <li
              className='hover:text-green hover:border-b-2 border-white'
              onClick={() =>
                animateScroll.scrollToTop({
                  duration: 400,
                  delay: 50,
                  smooth: true,
                })
              }>
              <Link to='/'><HomeIcon></HomeIcon>{' '} Green Market Venture </Link>
            </li>
            
          </ul>
        </div>
        <div className='flex flex-col align-center justify-center'>
          <ul className='flex flex-row align-center justify-center gap-5 cursor-pointer'>
            <li
              className='hover:text-green hover:border-b-2 border-white ease-in-out'
              onClick={() =>
                scroller.scrollTo('about', {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: -100,
                })
              }>
              <Link to='/'>About </Link>
            </li>
            <li
              className='hover:text-green hover:border-b-2 border-white ease-in-out'
              onClick={() =>
                scroller.scrollTo('schedule', {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: 0,
                })
              }>
              <Link to='/services'>Services</Link>
            </li>
            {/* <li className="links">Releases</li> */}
            <li
              className='hover:text-green hover:border-b-2 border-white ease-in-out'
              onClick={() =>
                scroller.scrollTo('newsletter', {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: 0,
                })
              }>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='hover:text-green hover:border-b-2 border-white ease-in-out'></li>
            {/* <IconContext.Provider
              className="fb"
              value={{ color: "#FF7700", size: "1.5rem" }}
            >
              <li className="nav-icons">
                <a
                  href="https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrSoundcloud />
                </a>
              </li>
            </IconContext.Provider>

            <IconContext.Provider
              className="fb"
              value={{ color: "#4267B2", size: "1.5rem" }}
            >
              <li className="nav-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100044150903725"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
            </IconContext.Provider> */}
          </ul>
        </div>
      </nav>
    </Element>
  );
}
