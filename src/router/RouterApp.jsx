import { Navigate, Route, Routes } from "react-router-dom";
import { RouterPortafolio } from "../portafolio/router/RouterPortafolio";

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/portafolio/*" element={<RouterPortafolio/>}/>
            <Route path="/*" element={<Navigate to="/portafolio"/>}/>
        </Routes>
    );
};
