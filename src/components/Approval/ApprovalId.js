import React from 'react'

export const ApprovalId = (props) => {

    let approvalNumber = '';
    const approvalNumberHandler = (event) => {
        approvalNumber = parseInt(event.target.value);
        console.log(approvalNumber);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Approval number = ', approvalNumber);
        props.onApprovalIdSubmit(approvalNumber);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
            <label> Enter Approval id:</label>
            </div>
            <div>
            <input type='text' placeholder='Enter the Approval ID' required='true' onChange={approvalNumberHandler}></input>
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>
        </form>
    );
}
