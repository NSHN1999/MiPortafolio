import { Navigate, Route, Routes } from "react-router-dom";
import { BlogPage, ContactoPage, EstudiosPage, HomePage, PortafolioPage, SobreMiPage } from "../pages";
import { PortafolioLayout } from "../layouts";

export const RouterPortafolio = () => {
    return (
        <PortafolioLayout>
            <Routes>
                <Route path="home" element={<HomePage/>}/>
                <Route path="sobremi" element={<SobreMiPage/>}/>
                <Route path="estudios" element={<EstudiosPage/>}/>
                <Route path="folio" element={<PortafolioPage/>}/>
                <Route path="blog" element={<BlogPage/>}/>
                <Route path="contacto" element={<ContactoPage/>}/>

                <Route path="/*" element={<Navigate to="/portafolio/home"/>}/>
            </Routes>
        </PortafolioLayout>
    );
};
