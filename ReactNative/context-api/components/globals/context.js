import React from "react";

const authData = {
    nombre: "NT2",
    apellido: "ORT",
    mail: "nt2@ort.edu.ar"
}

export { authData }

export default React.createContext(authData)