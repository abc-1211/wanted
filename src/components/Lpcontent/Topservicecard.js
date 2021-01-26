import React from "react";


function Topserviceard(props){
    return(
        
        
       
        
        <div className="top-service-card" >
            <img src ={props.bimage} />
            <h1>{props.topservicecat}</h1>
        
        </div>
        

    )
}


export default Topserviceard;