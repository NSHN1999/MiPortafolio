//IMPORTACIONES DE DEPENDENCIAS
import { motion } from "framer-motion";
//ESTILOS
import clases from "../styles/HomePage.module.css";

export const HomePage = () => {
    return (
        <motion.section 
            className={`${clases.content_page}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}    
        >
            <h1 className={`${clases.page__name}`}>Nicolás Hernández</h1>
            <h2 className={`${clases.page__job}`}>Desarrollador Web</h2>
        </motion.section>
    );
};
