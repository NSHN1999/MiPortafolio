//IMPORTACIONES DE DEPENDENCIAS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputer } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
//ESTILOS
import "../styles/Scroll.css";
import clases from "../styles/SobreMi.module.css";

export const SobreMiPage = () => {

    return (
        <motion.section  
            className={`${clases.content__page} ${clases.content__about}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
        >

            <header className={`${clases.about__header}`}>
                <h2 className={`${clases.about__title}`}> Sobre <span className={`${clases.title__color}`}>Mi</span></h2>
            </header>

            <section className={`${clases.about__personalInfo}`}>
                <article className={`${clases.personalInfo__bio}`}>
                    <p className={`${clases.personalInfo__description}`}>
                        Hola me llamo Nicolas y me gusta el desarrollo Web, los videojuegos, el deporte
                        y los animales. Mis hobbies actuales son el deporte y el dibujo. Mis metas
                        son dominar JavaScript con CSS y seguir aprendiendo mas sobre 
                        las tecnologias Front-End. 
                    </p>
                </article>
                <div className={`${clases.personalInfo__data}`}>
                    <ul className={`${clases.personalInfo__list}`}>
                        <li className={`${clases.personalInfo__option}`}>
                            <span className={`${clases.personalInfo__title}`}>Edad</span>
                            <span className={`${clases.personalInfo__value}`}>24</span>
                        </li>
                        <li className={`${clases.personalInfo__option}`}>
                            <span className={`${clases.personalInfo__title}`}>Pais</span>
                            <span className={`${clases.personalInfo__value}`}>Chile</span>
                        </li>
                        <li className={`${clases.personalInfo__option}`}>
                            <span className={`${clases.personalInfo__title}`}>Dirección</span>
                            <span className={`${clases.personalInfo__value}`}>Santiago, Curacaví</span>
                        </li>
                        <li className={`${clases.personalInfo__option}`}>
                            <span className={`${clases.personalInfo__title}`}>Correo</span>
                            <span className={`${clases.personalInfo__value}`}>nico.hernandezekko@gmail.com</span>
                        </li>
                        <li className={`${clases.personalInfo__option}`}>
                            <span className={`${clases.personalInfo__title}`}>Telefono</span>
                            <span className={`${clases.personalInfo__value}`}>+569 98180435</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={`${clases.about__services}`}>
                <header className={`${clases.services__header}`}>
                    <h3 className={`${clases.services__title}`}>
                        Lo que <span className={`${clases.title__color}`}>hago</span>
                    </h3>
                </header>
                <div className={`${clases.services__container}`}>
                    <article className={`${clases.services__service}`}>
                        <div className={`${clases.service__icon}`}>
                            <FontAwesomeIcon className={`${clases.icon__realIcon}`} icon={faCode}/>
                        </div>
                        <div className={`${clases.service__content}`}>
                            <h4 className={`${clases.service__title}`}>Programación</h4>
                            <p className={`${clases.service__description}`}>
                                Mi aprendizaje en programación comenzo en DuocUC donde aprendí 
                                lo mas basico de Java y también a modelar y hacer consultas a la BDD. 
                                Luego aprendí programación de BDD utlizanto PL/SQL, que fue lo 
                                que me inspiro a seguir en este mundo del desarrollo ya que fue un ramo 
                                en el que lleve al maximo mis habilidaes de auto aprendizaje.
                            </p>
                        </div>
                    </article>

                    <article className={`${clases.services__service}`}>
                        <div className={`${clases.service__icon}`}>
                            <FontAwesomeIcon className={`${clases.icon__realIcon}`} icon={faComputer}/>
                        </div>
                        <div className={`${clases.service__content}`}>
                            <h4 className={`${clases.service__title}`}>Desarrollo Web</h4>
                            <p className={`${clases.service__description}`}>
                                Maquetación y creación interfaces de usuario intuitivas y dinamicas. Me gusta 
                                animar las webs y crear diseños interactivos. Mantengo mis archivos bien
                                organizados y siempre estoy limpiando y refactorizndo mi codigo.
                                Actualmente me encuentro desarrollando en ReactJS con CSS y
                                de vez en cuando Tailwind.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            
        </motion.section >
    );
};
