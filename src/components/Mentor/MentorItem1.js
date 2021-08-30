import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

export const MentorItem1 = (props) => {

    const { MentorDataItem } = props;

    const history = useHistory();

    return (
        <Card>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>availability id</th>
                            <th>UserId</th>
                            <th>Start Date/Time</th>
                            <th>End Date/Time</th>
                            <th>Mentor skill</th>
                            <th>Mentored Hours</th>
                            <th>Mentor-Rating</th>
                            <th>AboutMentor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.mentorData.availabilityid}</td>
                            <td>{props.mentorData.userid}</td>
                            <td>{props.mentorData.startdatetime}</td>
                            <td>{props.mentorData.enddatetime}</td>
                            <td>{props.mentorData.mentoringskill}</td>
                            <td>{props.mentorData.mentoredhours}</td>
                            <td>{props.mentorData.mentorrating}</td>
                            <td>{props.mentorData.aboutmentor}</td>

                            <div>            
                                <Button variant="warning" style={{ marginRight: 10 }} onClick={() => props.onEdit(props.mentorData.userid)}> 
                                    Edit
                                </Button>

                                <Button variant="danger" onClick={() => props.onDelete(props.mentorData.userid)}>
                                    
                                    Delete
                                </Button>
                            </div>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </Card>
    )
}