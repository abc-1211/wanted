import React from "react";
import './Lpcontent.css';




function  Lpcontent(props) {
    
        return(
        <div>
            <div className="contentContainer">
                <div className="topSertopic">
                    Top service
                </div>

                <div className="topSerbox">
                    <div className="boxPT"><a className="serbot" >Personal Trainer</a></div>
                    <div className="boxWD"><a className="serbot">Web Developer</a></div>
                    <div className="boxBB"><a className="serbot">Barber</a></div>
                    <div className="boxBT"><a className="serbot">Beauty</a></div>
                </div>
                
            </div>
            
        </div>
            )    
    
}


export default Lpcontent;

