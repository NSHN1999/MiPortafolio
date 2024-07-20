/**ESTILOS */
import clases from "../styles/Mapa.module.css"

export const Mapa = () => {

    return (
        <div className={`${clases.contacto__map}`}>
            <iframe 
                className={`${clases.contacto__iframe}`}
                frameBorder={0} 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1665.022458931834!2d-71.13906005838673!3d-33.42207327621555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1721333448282!5m2!1ses!2scl"
            >
            </iframe>
        </div>
    )
};
