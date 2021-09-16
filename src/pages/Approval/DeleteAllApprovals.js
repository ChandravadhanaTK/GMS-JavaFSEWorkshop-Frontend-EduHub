import React from 'react'
import {useHistory} from 'react-router-dom'
import { deleteAllApprovalsAPI } from '../../features/Approval/ApprovalAPI'

export const DeleteAllApprovals = () => {
    const history = useHistory();
    const onOkClickedHandler = async () =>{
        console.log('Going to delete all approvals from database');
        try{
          const resp = await deleteAllApprovalsAPI();
          console.log('Approvals deleted from table = ', resp);
          history.push('/approval/all')
        } catch(error){
          console.log(error);
        }
    }
    const onCancelClickedHandler = () =>{
        history.push('/approval/all');
    }

 return(
     <div>
         <div>
             Click OK to delete all approvals form database. 
             <br></br>
             Or else click Cancel to go back to list.
         </div>
        
        <button onClick={onOkClickedHandler}> Ok </button>
        <button onClick={onCancelClickedHandler}> Cancel </button>
     </div>
 );   
}