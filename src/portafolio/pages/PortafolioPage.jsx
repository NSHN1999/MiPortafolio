//IMPORTACIONES DE DEPENDENCIAS
import { useState } from "react";
//IMPORTACIONES DE ARCHIVOS LOCALES
import { ListCategorias } from "../components/ListCategorias";
import "../helpers/handleButtonActive";
//ESTILOS
import clases from "../styles/PortafolioPage.module.css"

export const PortafolioPage = () => {

    const [ categoria, setCategoria ] = useState('Todo');

    return (
        <section className={`${clases.content__page} ${clases.content__portafolio}`}>

            <header className={`${clases.portafolio__header}`}>
                <h1 className={`${clases.header__title}`}>Portafolio</h1>
            </header>

            <nav className={`${clases.portafolio__navbar}`}>
                <ul className={`${clases.portafolio__menu}`}>
                    <li className={`${clases.portafolio__option} ${clases.portafolio__optionActive}`}>
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
            
        </section>
    );
};
