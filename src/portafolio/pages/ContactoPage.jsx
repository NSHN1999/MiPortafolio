//IMPORTACIONES DE DEPENDENCIAS
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
//IMPORTACION DE ARCHIVOS LOCALES
import { Mapa } from "../components";
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

            <div className={`${clases.container__contacto}`}>

                <section className={`${clases.contacto__info}`}>
                    <div className={`${clases.contacto__data}`}>
                        <FontAwesomeIcon icon={faLocationDot} className={`${clases.contacto__icon}`}/>
                        <h2 className={`${clases.contacto__subtitle}`}>Curacaví</h2>
                    </div>

                    <div className={`${clases.contacto__data}`}>
                        <FontAwesomeIcon icon={faPhone} className={`${clases.contacto__icon}`}/>
                        <h2 className={`${clases.contacto__subtitle}`}>+569 9818 0435</h2>
                    </div>

                    <div className={`${clases.contacto__data}`}>
                        <FontAwesomeIcon icon={faEnvelope} className={`${clases.contacto__icon}`}/>
                        <h2 className={`${clases.contacto__subtitle}`}>nico.hernandezekko@gmail.com</h2>
                    </div>

                    <div className={`${clases.contacto__data}`}>
                        <FontAwesomeIcon icon={faCircleCheck} className={`${clases.contacto__icon}`}/>
                        <h2 className={`${clases.contacto__subtitle}`}>Desarrollador Front</h2>
                    </div>
                </section>

                <section className={`${clases.contacto__formBox}`}>

                    <Mapa/>

                    <header className={`${clases.contacto__formHeader}`}>
                        <h3 className={`${clases.formHeader__subtitle}`}>¿Como puedo <span className={`${clases.subtitle__color}`}>ayudarte</span>?</h3>
                    </header>

                    <form className={`${clases.contacto__form}`}>
                        <div className={`${clases.form__container}`}>
                            <section className={`${clases.form__left}`}>
                                <div className={`${clases.form__group}`}>
                                    <input type="text" className={`${clases.form__input}`} name="name" required placeholder="Nombre"/>
                                    <label htmlFor="name" className={`${clases.form__label}`}>Nombre</label>
                                </div>
                                <div className={`${clases.form__group}`}>
                                    <input type="email" className={`${clases.form__input}`} name="email" required placeholder="Email"/>
                                    <label htmlFor="email" className={`${clases.form__label}`}>Email</label>
                                </div>
                                <div className={`${clases.form__group}`}>
                                    <input type="text" className={`${clases.form__input}`} name="asunto" required placeholder="Asunto"/>
                                    <label htmlFor="asunto" className={`${clases.form__label}`}>Asunto</label>
                                </div>
                            </section>

                            <section className={`${clases.form__right}`}>
                                <div className={`${clases.form__group} ${clases.form__groupTextArea}`}>
                                    <textarea className={`${clases.form__input} ${clases.form__inputTextArea}`} name="mensaje" required placeholder="Mensaje"/>
                                    <label htmlFor="mensaje" className={`${clases.form__label}`}>Mensaje</label>
                                </div>
                            </section>

                        </div>    
                        
                        <input type="submit" className={`${clases.form__button}`} value="Enviar Mensaje"/>
                        
                    </form>
                </section>

            </div>

        </motion.section >
    );
};
