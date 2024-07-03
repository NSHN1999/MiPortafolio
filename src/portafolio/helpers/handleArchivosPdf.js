

let archivoPdfAbierto = false;
let archivoPdfVentana = window;

console.log(archivoPdfVentana)

export const handleArchivoPdf = ( ubicacion ) => {

    if(archivoPdfVentana.closed !== false) archivoPdfAbierto = false;

    if(!archivoPdfAbierto){
        archivoPdfVentana = window.open( ubicacion, "_blank");
        archivoPdfAbierto = true;
    }else{
        archivoPdfVentana.focus();
    }

};