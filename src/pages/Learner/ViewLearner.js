import React, { useState } from 'react'
import { Row, Col, Card, Modal, Button } from 'react-bootstrap'

import { getAllLearner, deleteLearner, getLearnerById, getLearnerByUser, deleteAllLearner, deleteLearnerUser } from '../../features/learner/learnerAPI'

import { LearnerItem } from '../../components/Learner/LearnerItem'
import { EditLearner } from './EditLearner'

export const ViewLearner = () => {
  const [learner, setLearner] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [toDelete, setToDelete] = useState('')
  const [search, setSearch] = useState('All')
  const [userinput, setUserInput] = useState('')
  const [searchClicked, setSearchClicked] = useState(false)
  const [invalidInput, setInvalidInput] = useState(false)
     
  const handleOptionChange = (e) => {
      setLearner([])
      setSearchClicked(false)
      setInvalidInput(false)
      setSearch(e.target.value)
  }

  const handleKeyChange = (e) => {
  setLearner([])
  setSearchClicked(false)
  setInvalidInput(false)
  setUserInput(e.target.value)

}

  const onReset = () => {
      setLearner([])
      setSearchClicked(false)
      setInvalidInput(false)
    
  }

  const onSubmit=()=>{

    if (search === 'All')
      {
      console.log  (`Search ${search}`)
      setSearchClicked(true)
      setInvalidInput(false)
      getAllLearnerData()

      }
    else
      { 
      console.log(`Search ${search} - ${userinput}`)
      if (userinput === '')
          {
            setSearchClicked(false)
            setInvalidInput(true)
          }
      else
        { setSearchClicked(true)
          setInvalidInput(false)
             if (search === 'RequestId')
                 {getLearnerDataByRequest(userinput)}
              else 
              {getLearnerDataByUser(userinput)}
        }   
      }
    ;   
  }

  
  // useEffect(() => {getLearnerData()  }, [])

  const getLearnerDataByRequest = async (userinput) => {
    try {
      const LearnerData = await getLearnerById(userinput)
      // console.log(LearnerData)

      setLearner(LearnerData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const getAllLearnerData = async () => {
    try {
      const LearnerData = await getAllLearner()
      // console.log(LearnerData)

      setLearner(LearnerData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const getLearnerDataByUser = async (userinput) => {
    try {
      const LearnerData = await getLearnerByUser(userinput)
      // console.log(LearnerData)

      setLearner(LearnerData)
    } catch (error) {
      // TODO: notify user
    }
  }

  const handleModalOpen = (requestId) => {
    setToDelete(requestId)
    setShowModal(true)
  }

  const handleModalOpenNew = () => {
    setToDelete('')
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleDelete = async () => {
    try {

      console.log(`to delete - ${toDelete}`)
      if (toDelete !== '')
       { 
         
        console.log(`delete row`)
        await deleteLearner(toDelete)
         setToDelete('')
         setShowModal(false)
          search === 'All' && getAllLearnerData()
          search === 'RequestId' && getLearnerDataByRequest(userinput)
          search === 'UserId' && getLearnerDataByUser(userinput)
       }
      else
              if (search === 'All')
                {
                  console.log(`delete ALL `)
                  await deleteAll()
                  setToDelete('')
                  setShowModal(false)
                  setSearchClicked(false)
                  getAllLearnerData()}
              else
                if (search === 'RequestId')
                        {
                          console.log(`delete request`)
                          await deleteLearner(userinput)
                          setToDelete('')
                          setShowModal(false)
                          setSearchClicked(false)
                          getLearnerDataByRequest(userinput)
                        }
                else 
                  {
                    console.log(`delete user`)
                    await deleteAllForUser(userinput)
                    setToDelete('')
                    setShowModal(false)
                    setSearchClicked(false)
                    getLearnerDataByUser(userinput)
                  }  
     
    } catch (error) {
      
    }
  }

  const deleteAll = async () => {
    try {
      await deleteAllLearner()

      // {getAllLearnerData()}
           
      
     
    } catch (error) {
      
    }
  }

  const deleteAllForUser = async (userinput) => {
    try {
      await deleteLearnerUser(userinput)

        // {getLearnerDataByUser(userinput)}
           
      
     
    } catch (error) {
      
    }
  }

  return (
    <Card >
        <Card.Body>
          <Card.Title>View Learner</Card.Title>
          <Card.Text>
            <form>
              <input type="radio" as={Row} value="RequestId" id="request"
                onChange={handleOptionChange} name="search" />
              <label>View by Request Id</label>
              {'    '}
              <input type="radio" as={Col} value="UserId" id="user"
                onChange={handleOptionChange} name="search"/>
              <label>View by User Id</label>
              {'    '}
              <input type="radio" as={Col} value="All" id="all"
                onChange={handleOptionChange} name="search" defaultChecked/>
              <label>View All</label>
            </form>
          
          {search !== 'All' && 
                <form className="input">
                  <input type="text" onChange={handleKeyChange} value={userinput} name="userinput" />
                </form>
           }
          
          </Card.Text>
        <div>
            <button type="button" onClick={onSubmit}>Search</button> 
            <button type="button" onClick={onReset}>Clear</button>
            {invalidInput && 
              <div className="alert alert-warning">Please provide search key</div>
            }
        </div>
       </Card.Body> 
    
    

    { searchClicked &&

    <React.Fragment>
      <Card>
      {/* <table className="table">
                <thead>
                  <tr>
                    <th>Request Id</th>
                    <th>User Id</th>
                    <th>Role</th>
                    <th>Course Id</th>
                    <th>Approval Status</th>
                    <th>Assignment Id</th>
                    <th>Assignment Status</th>
                    <th>Score</th>
                 
                    </tr>
                </thead>
      </table> */}
      </Card>
      <Card>
        {learner.map(item => {
          return (
            <LearnerItem key={item.id} learnerData={item} onDelete={handleModalOpen} />
          )
        })}

        
      </Card>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Learner</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>

      { learner.length > 1 && 
        <div> <Button variant="danger" onClick={handleModalOpenNew}>Delete All</Button></div> 
      }

      { learner.length === 0 && 
        <div className="alert alert-warning">No Record found</div> 
      }
      {/* { search === 'All' && 
      <div>
          <Button variant="danger" onClick={handleModalOpenNew}>Delete All</Button>
      </div> }
      { search === 'UserId' && 
      <div>
      <Button variant="danger" onClick={handleModalOpenNew}>Delete All</Button>
      </div>
      } */}
    
    </React.Fragment>
    }

      
    
    </Card>
  )
}