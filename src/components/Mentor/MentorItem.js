import { useHistory } from 'react-router-dom'
import { Card, Button, Table } from 'react-bootstrap'
import { useState } from 'react';

export const MentorItem = (props) => {
  
  const history = useHistory();
  console.log("props: " + JSON.stringify(props));

  const { mentorData } = props

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
    
    // console.log(day+", "+date1+"-"+month+"-"+year+"  "+time); // Wed, 04-Aug-2021  10:00 AM
    //return (day+", "+date1+"-"+month+"-"+year+"  \n"+time);
    return `${day}, ${date1}-${month}-${year} ${time}`;

  }

  return (
        <tr>
          <td>{mentorData.username}</td>
          <td>{mentorData.mentoringskill}</td>
          <td>{formatDateTime(mentorData.startdatetime)}</td>
          <td>{formatDateTime(mentorData.enddatetime)}</td>
          <td>
            <Button variant="warning" style={{ marginRight: 10 }} 
                    onClick={() => history.push(`/mentor/edit/${props.mentorData.userid}`)} >
                    Edit
            </Button>
          </td>
          <td>
            <Button variant="danger"  
                    onClick={() => props.onDelete(props.mentorData.userid)}>
                    Delete
            </Button>                        
          </td>
        </tr>
  )
}