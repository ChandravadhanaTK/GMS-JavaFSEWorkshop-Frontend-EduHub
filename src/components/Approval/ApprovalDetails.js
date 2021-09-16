import React from 'react'

const ApprovalDetails = (props) => {
    const approval = props.approvalDetails;
    console.log('Displaying approval details = ', approval);

    return(
            <table>
                <tr>
                    <td>Approval Id </td>
                    <td>{approval.approvalId}</td>
                </tr>
                <tr>
                    <td>Request Id </td>
                    <td>{approval.requestId}</td>
                </tr>
                <tr>
                    <td>RM Id</td>
                    <td>{approval.rmId}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{approval.approvalStatus}</td>
                </tr>
                <tr>
                    <td>Status Message</td>
                    <td>{approval.approvalStatusMessage}</td>
                </tr>
                <tr>
                    <td>Created On</td>
                    <td>{approval.createdOn}</td>
                </tr>
                <tr>
                    <td>Last Updated on</td>
                    <td>{approval.lastUpdatedOn}</td>
                </tr>
            </table>
    );
}

export default ApprovalDetails;