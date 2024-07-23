//IMPORTACION DE ICONOS 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faGraduationCap, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
//IMPORTACION REACT-ROUTER
import { NavLink } from 'react-router-dom';
//ESTILOS
import clases from "../styles/MenuNavegacion.module.css";

export const MenuNavegacion = ( { handleShowMenu }) => {

    return (
        <nav className={`${clases.layout__menu}`}>
            <ul className={`${clases.menu__list}`}>
                <li className={`${clases.menu__option}`}>
                    <NavLink 
                        onClick={ handleShowMenu }
                        to="/portafolio/home" 
                        className={({isActive}) => `${clases.menu__link} ${isActive ? clases.active : ''}`}
                    >
                        <FontAwesomeIcon icon={faHouse} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Home</span>
                    </NavLink>
                </li>
                <li className={`${clases.menu__option}`}>
                    <NavLink 
                        onClick={ handleShowMenu }
                        to="/portafolio/sobremi" 
                        className={({isActive}) => `${clases.menu__link} ${isActive ? clases.active : ''}`}
                    >
                        <FontAwesomeIcon icon={faUser} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Sobre Mi</span>
                    </NavLink>
                </li>
                <li className={`${clases.menu__option}`}>
                    <NavLink 
                        onClick={ handleShowMenu }
                        to="/portafolio/estudios" 
                        className={({isActive}) => `${clases.menu__link} ${isActive ? clases.active : ''}`}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Estudios</span>
                    </NavLink>
                </li>
                <li className={`${clases.menu__option}`}>
                    <NavLink
                        onClick={ handleShowMenu }
                        to="/portafolio/folio" 
                        className={({isActive}) => `${clases.menu__link} ${isActive ? clases.active : ''}`}
                    >
                        <FontAwesomeIcon icon={faBriefcase} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Portafolio</span>
                    </NavLink>
                </li>
                <li className={`${clases.menu__option}`}>
                    <NavLink 
                        onClick={ handleShowMenu }
                        to="/portafolio/contacto" 
                        className={({isActive}) => `${clases.menu__link} ${isActive ? clases.active : ''}`}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className={`${clases.menu__icon}`}/>
                        <span className={`${clases.menu__overlay}`}>Contacto</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

MenuNavegacion.propTypes = {
    handleShowMenu: PropTypes.func.isRequired,
}
