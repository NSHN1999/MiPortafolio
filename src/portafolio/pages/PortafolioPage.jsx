//IMPORTACIONES DE DEPENDENCIAS
import { useState } from "react";
import { motion } from "framer-motion";
//IMPORTACIONES DE ARCHIVOS LOCALES
import { ListCategorias } from "../components/ListCategorias";
//ESTILOS
import clases from "../styles/PortafolioPage.module.css"

export const PortafolioPage = () => {

    const [ categoria, setCategoria ] = useState('Todo');

    return (
        <motion.section  
            className={`${clases.content__page} ${clases.content__portafolio}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
        >

            <header className={`${clases.portafolio__header}`}>
                <h1 className={`${clases.header__title}`}>Portafolio</h1>
            </header>

            <nav className={`${clases.portafolio__navbar}`}>
                <ul className={`${clases.portafolio__menu}`}>
                    <li className={`${clases.portafolio__option}`}>
                        <a 
                            className={`${clases.portafolio__btn}`}
                            onClick={() => setCategoria('Todo')}
                        >
                            Todo
                        </a>
                    </li>
                    <li className={`${clases.portafolio__option}`}>
                        <a  
                            className={`${clases.portafolio__btn}`}
                            onClick={() => setCategoria('Cursos')}
                        >
                            Cursos
                        </a>
                    </li>
                    <li className={`${clases.portafolio__option}`}>
                        <a
                            className={`${clases.portafolio__btn}`}
                            onClick={() => setCategoria('Proyectos')}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li className={`${clases.portafolio__option}`}>
                        <a 
                            className={`${clases.portafolio__btn}`}
                            onClick={() => setCategoria('Practicas')}
                        >
                            Practicas
                        </a>
                    </li>
                </ul>
            </nav>
            
            <ListCategorias categoria={categoria}/>
            
        </motion.section >
    );
};
