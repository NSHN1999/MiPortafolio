//ESTILOS
import clases from "../styles/ContactoPage.module.css";

export const ContactoPage = () => {
    
    return (
        <section className={`${clases.content__page} ${clases.content__contacto}`}>

            <header className={`${clases.contacto__header}`}>
                <h1 className={`${clases.header__title}`}>Contactame</h1>
            </header>

        </section>
    );
};
