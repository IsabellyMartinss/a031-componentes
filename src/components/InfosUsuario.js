import React from "react";
import foto from "../img/fotoPerfil.png"

const InfosUsuario = () =>{
    let usuario = "Isa";
    return(
        <div>
            <h4>{usuario}</h4>
            <img src={foto}/>    
         </div>
        
    )
}

export default InfosUsuario 