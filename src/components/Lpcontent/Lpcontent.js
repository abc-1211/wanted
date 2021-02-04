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
                    <div className="boxPT"><div className="serbot" >Personal Trainer</div></div>
                    <div className="boxWD"><div  className="serbot">Web Developer</div></div>
                    <div className="boxBB"><div  className="serbot">Barber</div></div>
                    <div className="boxBT"><div className="serbot">Beauty</div></div>
                </div>
                
            </div>
            
        </div>
            )    
    
}


export default Lpcontent;

