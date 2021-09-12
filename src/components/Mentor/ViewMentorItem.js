import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

export const ViewMentorItem = (props) => {

    const { onDelete, mentorData } = props

    const formatDateTime = (datetime) => {

        let date = new Date(datetime); 
    
        // console.log(datetime); //2021-08-04T10:00:00.842756
        // console.log("date: ", new Date(datetime)); //Wed Aug 04 2021 10:00:00 GMT+0530 (India Standard Time)
        // console.log("toTimeString: ", new Date(datetime).toTimeString()); // toTimeString:  10:00:00 GMT+0530 (India Standard Time)
        // console.log("toISOString: ", new Date(datetime).toISOString()); // toISOString:  2021-08-04T04:30:00.842Z
        // console.log("toLocaleString: ", new Date(datetime).toLocaleString()); // toLocaleString:  8/4/2021, 10:00:00 AM
        // console.log("toLocaleTimeString: ", new Date(datetime).toLocaleTimeString()); // toLocaleTimeString:  10:00:00 AM
        // console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })); // 10:00 AM
        
        let day  = date.toDateString().slice(0,3);
        let date1 = date.toDateString().slice(8,10);
        let month = date.toDateString().slice(4,7);
        let year = date.toDateString().slice(11,15);
        let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}); 
    
        return `${day}, ${date1}-${month}-${year} ${time}`; //Thu, 16-Sep-2021 09:00 AM
    
      }

    const history = useHistory();

    return (
        <tr>
            <td>{mentorData.userid}</td>
            <td>{mentorData.username}</td>
            <td>{formatDateTime(mentorData.startdatetime)}</td>
            <td>{formatDateTime(mentorData.enddatetime)}</td>
            <td>{mentorData.mentoringskill}</td>
            <td>{mentorData.mentorrating}</td>
            <td className="row">
                <Button variant="warning" size="sm" 
                        onClick={() => history.push(`/mentor/edit/${mentorData.userid}/${mentorData.availabilityid}`)} >
                            Edit
                </Button>
                <Button variant="danger" size="sm"  style={{marginTop: 5}}
                        onClick={() => onDelete(mentorData.userid, mentorData.availabilityid)}>            
                            Delete
                </Button>
            </td>
        </tr>
    )
}