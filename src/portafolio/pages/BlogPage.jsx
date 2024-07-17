//IMPORTACIONES DE DEPENDENCIAS
import { motion } from "framer-motion";
//ESTILOS
import clases from "../styles/BlogPage.module.css";

export const BlogPage = () => {

    return (
        <motion.section  
            className={`${clases.content__page} ${clases.content__blog}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
        >

            <header className={`${clases.blog__header}`}>
                <h1 className={`${clases.header__title}`}>Blog</h1>
            </header>
            
        </motion.section >
    );
};
