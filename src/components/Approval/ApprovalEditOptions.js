import React from 'react'
import {useHistory} from 'react-router'
export const ApprovalEditOptions = (props) => {
    const history = useHistory();

    let comment = "";
    let decision = "";

    const commentChangeHandler  = (event) => {
        comment = event.target.value;
        console.log('comment = ', comment);
      }

    const cancelhandler = () => {
        console.log('Cancel button pressed. Going back');
        //history.goBack();
        props.onCancel();
    }

    const approveHandler = () => {
        console.log('approve button clicked')
        decision = "Approved";
        props.onAction(decision, comment);
    }

    const rejectHandler = () => {
        console.log('reject button clicked')
        decision = "Rejected";
        props.onAction(decision, comment);
    }

    return(
        <div>
            <form>
                <label>Approve or reject the approval. Or click Cancel to go back to previous option</label>
                <br></br>
                <label> Comment </label>
                <input type='text' onChange={commentChangeHandler}></input>
                <br></br>
                <button type='button' onClick={approveHandler}>Approve</button>
                <button type='button' onClick={rejectHandler}>Reject</button>
                <button type='button' onClick={cancelhandler}>Cancel</button>
            </form>
        </div>
    );
}