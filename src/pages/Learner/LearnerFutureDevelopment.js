import React, { useState } from 'react'
import { Row, Col, Card, Modal, Button , Table} from 'react-bootstrap'

export const LearnerFutureDevelopment = () => {
  
  return (
    <div className="container">
    <ul>
        <h4>Major updates / enhancements</h4>
        <li>Foreign Key implementation</li>
        
        <li>Role based authentication in View Learner Screen</li>
        <li>Role based authentication/access in edit Screen</li>

        <h4>Minor updates / enhancements</h4>
        <li>Soft delete of learner record</li>
        <li>Delete multiple Learner </li>
        <li>Pagination of View Learner Screen </li>
        <li>Add Screen- restrict duplicate enrollement </li>
        <li>Add /Update Screen - Field level validation and datatype restriction </li>
        <li>Back Button in Edit Screen to go back to View Learner </li>
    </ul>
    </div>


  )
}