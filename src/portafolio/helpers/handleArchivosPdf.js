
let nombresArchivos = [];
let estadoArchivos = [];

export const handleArchivoPdf = ( ubicacion ) => {
    //Se valida que exista ubicacion(nombre del archivo) y si no existe guarda la ubicacion en el arreglo nombresArchivos.
    if(!nombresArchivos.includes(ubicacion)) nombresArchivos.push(ubicacion);
    //Se almacena el indice de la ubicacion en una variable para darle diferentes usos.
    let indiceArchivo = nombresArchivos.indexOf(ubicacion);

    //Se valida si existe el objeto de ubicacion. 
    if(!estadoArchivos.includes(estadoArchivos[indiceArchivo])){
        //Se inserta un objeto al arreglo de los Archivos 
        estadoArchivos.push(
            {
                id: indiceArchivo,
                archivoPdfAbierto: false,
                archivoPdfVentana: window
            }
        );
    }

    //Se almacena el archivo a una variable
    let archivo = estadoArchivos[indiceArchivo];
    console.log(archivo)
    //Se valida si la ventana esta cerrada
    if(archivo.archivoPdfVentana.closed !== false) archivo.archivoPdfAbierto = false;
    
    if(!archivo.archivoPdfAbierto){
        //Si la ventana esta cerrada, abre una nueva ventana
        archivo.archivoPdfVentana = window.open( ubicacion, "_blank");
        archivo.archivoPdfAbierto = true;
    }else{
        //Si la ventana esta abierta se hara focus sobre la misma
        archivo.archivoPdfVentana.focus();
    }

};