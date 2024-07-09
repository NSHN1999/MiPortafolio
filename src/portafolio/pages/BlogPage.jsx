//ESTILOS
import clases from "../styles/BlogPage.module.css";

export const BlogPage = () => {

    return (
        <section className={`${clases.content__page} ${clases.content__blog}`}>

            <header className={`${clases.blog__header}`}>
                <h1 className={`${clases.header__title}`}>Blog</h1>
            </header>
            
        </section>
    );
};
