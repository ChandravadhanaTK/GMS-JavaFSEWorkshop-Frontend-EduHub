import { Button } from "bootstrap";
import React from "react";
import './PopUp.css' ;
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {<>
            <div>
                are you sure to delete all Learner form EduHub?
            </div>
            <div>
                Click OK to confirm or close to cancel?
            </div>
            <Button>OK</Button>
            </>
        }
        </div>
        </div>
  );
};
 
export default Popup;