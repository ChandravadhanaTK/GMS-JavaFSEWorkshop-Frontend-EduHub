import React, {Component} from 'react';
import './Learner.css' ;
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'

export default class ViewLearner extends Component {

  constructor(props){
    super(props)
    this.state = {
      learnerlist : 
      [
          {learnerid: 10001, userid: 502002, course: 'React'},
          {learnerid: 10002, userid: 502005, course: 'Java'},
          {learnerid: 10003, userid: 502008, course: 'Angular'},
      ],
      search: 'All',
      searchClicked: false,
      userinput: '',
      invalidInput: false
    }

    this.handleChange=(e)=>{
      this.setState({
        // search: e.target.value, 
        // userinput: e.target.value
        searchClicked:false,
        invalidInput:false,
        [e.target.name]: e.target.value
      })
    }

    this.onReset=()=>{
  
      this.setState({searchClicked:false})
      this.setState({invalidInput:false})
      
    }

    this.onSubmit=()=>{

      if (this.state.search === 'All')
        {
        console.log  (`Search ${this.state.search}`)
        this.setState({searchClicked:true})
        this.setState({invalidInput:false})
        }
      else
        { 
        console.log(`Search ${this.state.search} - ${this.state.userinput}`)
        if (this.state.userinput === '')
            {
              this.setState({invalidInput:true})
              this.setState({searchClicked:false})
            }
        else
          { this.setState({invalidInput:false})
            this.setState({searchClicked:true})
          }   
        }
      ;   
    }

    this.delete1Record=()=>{
  
      console.log(`Delete 1 record`)
      
    }

    this.editRecord=()=>{
  
      console.log(`edit 1 record`)
      
    }

    this.deleteAll=()=>{
  
      console.log("Delete all records from EDuHub")
      
    }

    this.deleteAllForUser=()=>{
  
      console.log("Delete all records for User from EDuHub")
      
    }

    this.viewRecord=()=>{
  
      console.log("Trigger View Popup")
      
    }
    
  }

    render () { 

    return (
      <Card className="ViewLearner">
        <Card.Body>
          <Card.Title>View Learner</Card.Title>
          <Card.Text>
            <form>
              <input type="radio" as={Row} value="RequestId" id="request"
                onChange={this.handleChange} name="search" />
              <label>View by Request Id</label>
              {'    '}
              <input type="radio" as={Col} value="UserId" id="user"
                onChange={this.handleChange} name="search"/>
              <label>View by User Id</label>
              {'    '}
              <input type="radio" as={Col} value="All" id="all"
                onChange={this.handleChange} name="search" defaultChecked/>
              <label>View All</label>
            </form>
          
          {this.state.search !== 'All' && 
                <form className="input">
                  <input type="text" onChange={this.handleChange} value={this.state.userinput} name="userinput" />
                </form>
           }
          
          </Card.Text>
        <div>
            <button type="button" onClick={this.onSubmit}>Search</button> 
            <button type="button" onClick={this.onReset}>Clear</button>
            {this.state.invalidInput && 
              <div className="alert alert-warning">Please provide search key</div>
            }
        </div>
      
        {this.state.searchClicked && 
          <>
          <div className="container">
            <table className="table">
                <thead>
                  <tr>
                    <th>Request Id</th>
                    <th>User Id</th>
                    <th>Course</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.state.learnerlist.map (
                        learner =>
                          <tr >
                            <td>{learner.learnerid}</td>
                            <td>{learner.userid}</td>
                            <td>{learner.course}</td>
                            <div>
                            <Button variant="info" style={{ marginRight: 10 }} onClick={this.viewRecord}>
                                  View
                                </Button>
                                <Button variant="warning" style={{ marginRight: 10 }} onClick={this.editRecord}>
                                  Edit
                                </Button>
                                <Button variant="danger" onClick={this.delete1Record}>
                                  Delete
                                </Button>
                            </div>
                          </tr>
                      )
                    }
                </tbody>
            </table>
          </div>   
          
          { this.state.search === 'All' && <div>
              <Button variant="danger" onClick={this.deleteAll}>Delete All</Button>
          </div> }
          { this.state.search === 'UserId' && <div>
              <Button variant="danger" onClick={this.deleteAllForUser}>Delete All</Button>
          </div> }
          </>
        }
        </Card.Body>
      </Card>
    ) 
    }

}