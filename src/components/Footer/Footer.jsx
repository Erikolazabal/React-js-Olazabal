import React, { useContext }  from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { Theme } from '../../contexts/Theme';


const Footer = () => {
  const {themeColor} = useContext(Theme)

  return (
    <footer className= {themeColor === 'light' ? 'footerStylelight' : 'footerStyle'}>
      <ul className= {themeColor === 'light' ? 'footer__ul_light' : 'footer__ul'}>
        <li className= {themeColor === 'light' ? 'footer__li_git_light' : 'footer__li_git'}>
          <a href="https://github.com/Erikolazabal" target="_blank" rel="noreferrer" >
            <picture >
            <FaGithub size='30px'/>
            </picture>
          </a>
          <span>Olazabal Erik</span>
        </li>
        <li className="footer__li">
          <picture className= {themeColor === 'light' ? 'footer__burgerlight' : 'footer__burger'}>
            <GiHamburger size='80px'/>
          </picture>
          <span>COMISION 40275</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
