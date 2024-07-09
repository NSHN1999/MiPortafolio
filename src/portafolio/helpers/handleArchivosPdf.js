
let archivoPdfAbierto = false;
let archivoPdfVentana = window;

export const handleArchivoPdf = ( ubicacion ) => {
    //Se valida si la ventana esta cerrada
    if(archivoPdfVentana.closed !== false) archivoPdfAbierto = false;
    
    if(!archivoPdfAbierto){
        //Si la ventana esta cerrada, abre una nueva ventana
        archivoPdfVentana = window.open( ubicacion, "_blank");
        archivoPdfAbierto = true;
    }else{
        //Si la ventana esta abierta se hara focus sobre la misma
        archivoPdfVentana.focus();
    }

};