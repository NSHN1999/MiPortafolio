//IMPORTACIONES DE DEPENDENCIAS
import { motion } from "framer-motion";
//ESTILOS
import clases from "../styles/ContactoPage.module.css";

export const ContactoPage = () => {
    
    return (
        <motion.section  
            className={`${clases.content__page} ${clases.content__contacto}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
        >

            <header className={`${clases.contacto__header}`}>
                <h1 className={`${clases.header__title}`}>Contactame</h1>
            </header>

        </motion.section >
    );
};
