import { PortafolioLayout } from "../layouts";

import clases from "../styles/HomePage.module.css";

export const HomePage = () => {
    return (
        <PortafolioLayout>
            <h1 className={`${clases.page__name}`}>Nicolás Hernández</h1>
            <h2 className={`${clases.page__job}`}>Desarrollador Web</h2>
        </PortafolioLayout>
    );
};
