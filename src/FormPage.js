import React from "react";
import Form from 'react-bootstrap/Form';
import './Form.css';
import Button from 'react-bootstrap/Button';

function FormPage(props) {
  return (
    <div className="formContainer">
      <h1>
        <span className="titleSpanText">Featured</span> Developers
      </h1>
      <Form className="formElements">
        <Form.Group controlId="logo" className="formElements">
          <Form.Label className="formLabel">Developer Logo Image URL</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="title" className="formElements">
          <Form.Label className="formLabel">Developer Name</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="totalExp" className="formElements">
          <Form.Label className="formLabel">Years of Experience</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="totalProjects" className="formElements">
          <Form.Label className="formLabel">Projects Count</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="desc" className="formElements">
          <Form.Label className="formLabel">Description</Form.Label>
          <Form.Control as="textarea" rows={3} className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="imgTitle" className="formElements">
          <Form.Label className="formLabel">Project Name</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="location" className="formElements">
          <Form.Label className="formLabel">Project Location</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <Form.Group controlId="imgURL" className="formElements">
          <Form.Label className="formLabel">Project Image URL</Form.Label>
          <Form.Control type="text" className="formControl" onChange={props.handleChange} />
        </Form.Group>
        <br/><br/>
        <Button variant="primary" type="submit" className="buttonSubmit" onClick={props.createDeveloper}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default FormPage;
