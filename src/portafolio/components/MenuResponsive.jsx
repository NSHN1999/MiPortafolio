/**EXPORTACIONES DE DEPENDENCIAS */
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
/**ESTILOS */
import clases from "../styles/MenuResponsive.module.css";

export const MenuResponsive = ( { showMenu, handleShowMenu }) => {

    return (
        <div
            onClick={handleShowMenu}
            className={`${clases.layout__menuToggle} ${showMenu ? clases.active__menuMostrar : clases.active__menuOcultar}`}
        >
            <div 
                className={`${clases.menuToggle__cara} ${showMenu ? clases.active__mostrar : clases.active__ocultar}`}
            >
                <FontAwesomeIcon 
                    className={`${clases.menuToggle__icon} ${clases.icon__burguer}`} 
                    icon={faBars}
                /> 
            </div>
            <div 
                className={`${clases.menuToggle__cruz} ${showMenu ? clases.active__ocultar : clases.active__mostrar}`}
            >
                <FontAwesomeIcon 
                    className={`${clases.menuToggle__icon} ${clases.icon__mark}`} 
                    icon={faXmark}
                />  
            </div> 
        </div>
    ) 
};


MenuResponsive.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    handleShowMenu: PropTypes.func.isRequired,
}