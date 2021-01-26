import React from "react";
import './Lpcontent.css';
import Topservicecard from "./Topservicecard";




function  Lpcontent(props) {
    
        return(
        <div>
           
            <Topservicecard  topservicecat="Beauty" />
            <Topservicecard topservicecat="Tutor"/>
            <Topservicecard topservicecat="Personal Trainer"/>
            <Topservicecard topservicecat="Web developer"/>
            
            
            
            </div>
            )    
    
}


export default Lpcontent;

