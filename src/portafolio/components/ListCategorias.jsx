//IMPORTACIONES DE DEPENDENCIAS
import PropTypes from 'prop-types';
//IMPORTACIONES ARCHIVOS LOCALES
import { CardWeb } from "./CardWeb";
import { getWebByCategory } from "../helpers";
//ESTILOS
import clases from "../styles/ListCategorias.module.css";

export const ListCategorias = ( {categoria} ) => {

    const webs = getWebByCategory(categoria);

    return (
        <section className={`${clases.portafolio__galeria}`}>
            {
                webs.map( web => (
                    <CardWeb key={web.id}
                        {...web}
                    />
                ))
            }
        </section>
    )
};

ListCategorias.propTypes = {
    categoria: PropTypes.string,
};
