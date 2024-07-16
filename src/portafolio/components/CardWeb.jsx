//IMPORTACIONES DE DEPENDENCIAS
import PropTypes from 'prop-types';
//ESTILOS
import clases from "../styles/CardWeb.module.css";

export const CardWeb = ( {id, categoria, nombre, link, descripcion} ) => {



    return (
        <figure className={`${clases.galeria__card}`}>

            <div className={`${clases.galeria__galeriaImagen}`}>
                <a href={`${ link }`} className={`${clases.galeria__link}`} target="_blank">
                    <img src={`/assets/img/${id}.PNG`} className={`${clases.galeria__imagen}`} alt={ id }/>
                </a>
            </div>

            <figcaption className={`${clases.galeria__title}`}>{ nombre }</figcaption>
            
            <div className={`${clases.card__descripcion}`}>
                <span className={`${clases.galeria__categoria}`}>{ categoria[0] }</span>
                <p className={`${clases.galeria__descripcion}`}>{ descripcion }</p>
            </div>

        </figure>
    )
};

CardWeb.propTypes = {
    id: PropTypes.string,
    categoria: PropTypes.array,
    nombre: PropTypes.string,
    link: PropTypes.string,
    descripcion: PropTypes.string,
};
