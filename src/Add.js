import React, {useState} from 'react';
import {Modal,Button,Form,Col,Row} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component'; 

const Add = ({show, handleClose, addMovie}) => {

  const [newMovie, setNewMovie] = useState({
    title:"",
    description:"",
    posterURL:"" ,
    rating:1,
    trailerLink:""
  })

  const handleChange = (e) => {
    e.preventDefault()    
    setNewMovie({...newMovie, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter a Title" onChange={handleChange} name="title"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" placeholder="rating" onChange={handleChange} name="rating"/>
        </Form.Group>
      </Row> 

   

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label> posterURL</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={handleChange}  name="posterURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={handleChange} name="description"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddLink">
        <Form.Label>Trailer Link</Form.Label>
        <Form.Control type="text" placeholder=" " onChange={handleChange} name="trailerLink"/>
      </Form.Group>


     
    </Form>

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {addMovie(newMovie);handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add