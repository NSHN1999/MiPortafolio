/*ESTILOS*/
import clases from "../styles/EstudiosPage.module.css";

export const EstudiosPage = () => {

    return (
        <section className={`${clases.content__page} ${clases.content__estudios}`}>

            <header className={`${clases.estudios__header}`}>
                <h1 className={`${clases.header__title}`}>Formación</h1>
            </header>

            <div className={`${clases.resumen__container}`}>

                <section className={`${clases.resumen__left}`}>
                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Formación</h2>
                    </header>

                    <div className={`${clases.resumen__timelines}`}>
                        <article className={`${clases.timeline__item}`}>
                            <header className={`${clases.timeline__header}`}>
                                <h4 className={`${clases.timeline__year}`}>2022 - 2024</h4>
                                <span className={`${clases.timeline__company}`}>Instituto Profesional Duoc UC</span>
                            </header>

                            <div className={`${clases.timeline__divide}`}></div>

                            <div className={`${clases.timeline__description}`}>
                                <h3 className={`${clases.timeline__title}`}>Analista Programador<span>&#40;carrera afin&#41;</span></h3>
                                <p className={`${clases.timeline__description}`}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere maiores ut animi quibusdam enim ad quo asperiores possimus inventore, maxime mollitia. Assumenda eius culpa reprehenderit! Ullam illum quam quaerat!
                                </p>
                            </div>
                        </article>
                    </div>

                </section>

                <section className={`${clases.resumen__right}`}>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Habilidades de codigo</h2>
                    </header>

                    <div className={`${clases.resumen__skills}`}>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>HTML/CSS</h4>
                            <span className={`${clases.skills__number}`}>90%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>JavaScript</h4>
                            <span className={`${clases.skills__number}`}>80%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>PL/SQL</h4>
                            <span className={`${clases.skills__number}`}>90%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje}`}></div>
                        </div>
                    </div>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Frameworks y Librerias</h2>
                    </header>

                    <div className={`${clases.resumen__skills}`}>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>React JS</h4>
                            <span className={`${clases.skills__number}`}>90%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje}`}></div>
                        </div>

                        <article className={`${clases.skills__title}`}>
                            <h4 className={`${clases.skills__text}`}>Tailwind</h4>
                            <span className={`${clases.skills__number}`}>60%</span>
                        </article>
                        <div className={`${clases.skills__progressbar}`}>
                            <div className={`${clases.skills__porcentaje}`}></div>
                        </div>
                    </div>

                    <header className={`${clases.resumen__subHeader}`}>
                        <h2 className={`${clases.resumen__subTitle}`}>Conocimientos</h2>
                    </header>

                    <div className={`${clases.resumen__knowledges}`}>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Programación</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Desarrollo Web</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Diseño Web</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Modelamiento de BDD</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Consultas de BDD</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Programación de BDD</li>
                        </ul>
                        <ul className={`${clases.knowleges__list}`}>
                            <li className={`${clases.knowledges__option}`}>Excel nivel Intermedio</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className={`${clases.resumen__certificados}`}>
                <header className={`${clases.resumen__subHeader}`}>
                    <h2 className={`${clases.resumen__subTitle}`}>Certificados</h2>
                </header>

                <section className={`${clases.certificates__container}`}>
                    <article className={`${clases.certificates__certificate}`}>
                        <div className={`${clases.certificate__logo}`}>
                            <img src="#" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Modulo DuocUC</h4>
                            <span className={`${clases.certificate__id}`}>DuocUC</span>
                            <span className={`${clases.certificate__fecha}`}>2 Julio 2024</span>
                        </div>
                    </article>

                    <article className={`${clases.certificates__certificate}`}>
                        <div className={`${clases.certificate__logo}`}>
                            <img src="#" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Practica Profesional DuocUC</h4>
                            <span className={`${clases.certificate__id}`}>DuocUC</span>
                            <span className={`${clases.certificate__fecha}`}>2 Julio 2024</span>
                        </div>
                    </article>

                    <article className={`${clases.certificates__certificate}`}>
                        <div className={`${clases.certificate__logo}`}>
                            <img src="#" className={`${clases.certificate__img}`}/>
                        </div>
                        <div className={`${clases.certificate__content}`}>
                            <h4 className={`${clases.certificate__title}`}>Aprende JavaScript ES9, HTML, CSS3 y NodeJS</h4>
                            <span className={`${clases.certificate__id}`}>Udemy</span>
                            <span className={`${clases.certificate__fecha}`}>1 Febrero 2023</span>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
};
