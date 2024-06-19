import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faEnvelope, faGraduationCap, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
//ESTILOS
import clases from "../styles/MenuNavegacion.module.css";

export const MenuNavegacion = () => {
    return (
        <nav className={`${clases.layout__menu}`}>
            <ul className={`${clases.menu__list}`}>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/home" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faHouse} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Home</span>
                    </Link>
                </li>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/sobremi" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faUser} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Sobre Mi</span>
                    </Link>
                </li>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/estudios" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Estudios</span>
                    </Link>
                </li>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/folio" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faBriefcase} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Portafolio</span>
                    </Link>
                </li>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/blog" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faBook} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Blog</span>
                    </Link>
                </li>
                <li className={`${clases.menu__option}`}>
                    <Link 
                        to="/portafolio/contacto" 
                        className={`${clases.menu__link}`}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Contacto</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
