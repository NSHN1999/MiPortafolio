import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faCode, faComputer } from "@fortawesome/free-solid-svg-icons";

import { PortafolioLayout } from "../layouts";
import "../styles/Scroll.css";
import clases from "../styles/SobreMi.module.css";

export const SobreMiPage = () => {
    return (
        <PortafolioLayout>
            <section className={`${clases.content__page} ${clases.content__about}`}>

                <header className={`${clases.about__header}`}>
                    <h2 className={`${clases.about__title}`}> Sobre <span className={`${clases.title__color}`}>Mi</span></h2>
                </header>

                <section className={`${clases.about__personalInfo}`}>
                    <article className={`${clases.personalInfo__bio}`}>
                        <p className={`${clases.personalInfo__description}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque veniam rem nihil aspernatur soluta. Placeat laudantium quas ex et. Tempora mollitia magnam atque, similique illum ut deserunt. Consequuntur, illum!
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
                                <h4 className={`${clases.service__title}`}>Programacion</h4>
                                <p className={`${clases.service__description}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident molestias voluptatum quaerat repellat voluptas, aliquam enim ea id quibusdam quod eaque pariatur nisi soluta modi, nemo delectus eligendi tenetur vel?</p>
                            </div>
                        </article>

                        <article className={`${clases.services__service}`}>
                            <div className={`${clases.service__icon}`}>
                                <FontAwesomeIcon className={`${clases.icon__realIcon}`} icon={faComputer}/>
                            </div>
                            <div className={`${clases.service__content}`}>
                                <h4 className={`${clases.service__title}`}>Desarrollo Web</h4>
                                <p className={`${clases.service__description}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident molestias voluptatum quaerat repellat voluptas, aliquam enim ea id quibusdam quod eaque pariatur nisi soluta modi, nemo delectus eligendi tenetur vel?</p>
                            </div>
                        </article>
                    </div>
                </section>
                
            </section>
        </PortafolioLayout>
    );
};
