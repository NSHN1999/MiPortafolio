import { webs } from "../data/webs";

export const getWebByCategory = ( categoria ) => {

    const categoriasValidas = [ 'Todo', 'Cursos', 'Proyectos', 'Practicas' ];

    if(!categoriasValidas.includes(categoria)){
        throw new Error(`${categoria} no es una categoria valida`);
    }

    return webs.filter( web => web.categoria.includes(categoria) );
};