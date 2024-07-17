//IMPORTACIONES DE DEPENDENCIAS
import { motion } from "framer-motion";
//IMPORTACIONES DE ARCHIVOS LOCALES
import { handleArchivoPdf } from "../helpers";
/*ESTILOS*/
import clases from "../styles/EstudiosPage.module.css";

export const EstudiosPage = () => {

    return (
        <motion.section 
            className={`${clases.content__page} ${clases.content__estudios}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
        >

            <header className={`${clases.estudios__header}`}>
                <h1 className={`${clases.header__title}`}>Curriculum</h1>
            </header>

            <div className={`${clases.resumen__container}`}>

                <section className={`${clases.resumen__left}`}>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Formación</h2>
                    </header>

                    <div className={`${clases.resumen__timelines}`}>
                        <article className={`${clases.timelines__timeline}`}>
                            <header className={`${clases.timeline__header}`}>
                                <h4 className={`${clases.timeline__year}`}>2024</h4>
                                <span className={`${clases.timeline__company}`}>Instituto Profesional Duoc UC</span>
                            </header>

                            <div className={`${clases.timeline__divide}`}></div>

                            <div className={`${clases.timeline__description}`}>
                                <h3 className={`${clases.timeline__title}`}>Analista Programador</h3>
                                <p className={`${clases.timeline__text}`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere maiores ut animi quibusdam enim ad quo asperiores possimus inventore, maxime mollitia.
                                </p>
                            </div>
                        </article>
                    </div>

                </section>

                <section className={`${clases.resumen__right}`}>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Habilidades de <span className={`${clases.title__color}`}>codigo</span></h2>
                    </header>

                    <div className={`${clases.resumen__skills}`}>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>HTML/CSS</h4>
                            <span className={`${clases.skills__number}`}>90%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje} ${clases.skills__porcentajeP1}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>JavaScript</h4>
                            <span className={`${clases.skills__number}`}>40%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje} ${clases.skills__porcentajeP2}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>PL/SQL</h4>
                            <span className={`${clases.skills__number}`}>80%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje} ${clases.skills__porcentajeP3}`}></div>
                        </div>
                    </div>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Frameworks y <span className={`${clases.title__color}`}>Librerias</span></h2>
                    </header>

                    <div className={`${clases.resumen__skills}`}>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>React JS</h4>
                            <span className={`${clases.skills__number}`}>90%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje} ${clases.skills__porcentajeP4}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>Tailwind</h4>
                            <span className={`${clases.skills__number}`}>60%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje} ${clases.skills__porcentajeP5}`}></div>
                        </div>
                    </div>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Conocimientos</h2>
                    </header>

                    <div className={`${clases.resumen__knowledges}`}>
                        <ul className={`${clases.knowledges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Programación</li>
                            <li className={`${clases.knowledges__option}`}>Desarrollo Web</li>
                            <li className={`${clases.knowledges__option}`}>Diseño Web</li>
                            <li className={`${clases.knowledges__option}`}>Ingles intermedio</li>
                            <li className={`${clases.knowledges__option}`}>Modelamiento de BDD</li>
                            <li className={`${clases.knowledges__option}`}>GitHub</li>
                            <li className={`${clases.knowledges__option}`}>Consultas de BDD</li>
                            <li className={`${clases.knowledges__option}`}>Programación de BDD</li>
                            <li className={`${clases.knowledges__option}`}>Excel</li>
                        </ul>
                    </div>
                </section>
                
            </div>

            <div className={`${clases.resumen__certificados}`}>
                <header className={`${clases.resumen__subHeader}`}>
                    <h2 className={`${clases.resumen__subTitle}`}>Certificados</h2>
                </header>

                <section className={`${clases.certificates__container}`}>

                    <article 
                        className={`${clases.certificates__certificate}`}
                        onClick={() => handleArchivoPdf("/assets/pdfs/CertificadoModuloDuocUC.pdf")}
                    >
                        <div className={`${clases.certificate__logo}`}>
                            <img src="/assets/img/LogoDuocUc.jpg" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Modulo DuocUC</h4>
                            <span className={`${clases.certificate__id}`}>DuocUC</span>
                            <span className={`${clases.certificate__fecha}`}>2 Julio 2024</span>
                        </div>
                    </article>

                    <article 
                        className={`${clases.certificates__certificate}`}
                        onClick={() => handleArchivoPdf("/assets/pdfs/CertificadoPracticaProfesional.pdf")}
                    >
                        <div className={`${clases.certificate__logo}`}>
                            <img src="/assets/img/LogoDuocUc.jpg" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Practica Profesional DuocUC</h4>
                            <span className={`${clases.certificate__id}`}>DuocUC</span>
                            <span className={`${clases.certificate__fecha}`}>2 Julio 2024</span>
                        </div>
                    </article>

                    <article 
                        className={`${clases.certificates__certificate}`}
                        onClick={() => handleArchivoPdf("/assets/pdfs/CertificadoUdemy.pdf")}
                    >
                        <div className={`${clases.certificate__logo}`}>
                            <img src="/assets/img/LogoUdemy.png" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Aprende JavaScript, HTML, CSS3 y NodeJS</h4>
                            <span className={`${clases.certificate__id}`}>Udemy</span>
                            <span className={`${clases.certificate__fecha}`}>1 Febrero 2023</span>
                        </div>
                    </article>
                </section>
            </div>
        </motion.section >
    );
};
