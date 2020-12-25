import React, {useState} from 'react';
import {
    Row,
    Col,
    Button,
    FormGroup,
    Card,
    CardBody,
    Label,
    ListGroup, ListGroupItem,
    CardTitle
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-validation/build/form';

const FormValidate = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [Formvalue, setFormvalue] = useState({id: "", icon:"", email:"", age:"", title:"", mobile:"", developer:""});
    const onSubmit = (data) => {
        setFormvalue(data);
    };
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardTitle className="p-3 border-bottom mb-0">
                        Form
                        </CardTitle>
                        <CardBody>
                           
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <label className="control-label" htmlFor="id">
                                ID
                            </label>
                            <div className="mb-2">
                                <input
                                   type="number"
                                    name="id"
                                    className="form-control"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="icon">
                                Icon
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="file"
                                    name="icon"
                                    ref={register({ required: true })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.icon && 'Icon is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="name">
                                Name
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="text"
                                    name="name"
                                    ref={register({ required: true })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.name && 'Name is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="locked">
                                Locked
                            </label>
                            <div className="mb-2">
                                <select name="locked" className="form-control" ref={register({ required: true })}>
                                    <option value="">Select Option</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                </div>
                                <span className="text-danger">{errors.locked && 'Locked select value.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="color">
                                Color template
                            </label>
                            <div className="mb-2">
                                <input
                                    type="color"
                                    name="color"
                                    ref={register({ required: true})}
                                    className="form-control"
                                    defaultValue="#5a6af5"
                                />
                            </div>
                            <span className="text-danger">{errors.color && 'Color template is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                                <label className="control-label" htmlFor="balance">
                                    Coins balance
                                </label>
                                <div className="mb-2">
                                    <select name="balance" className="form-control" >
                                        <option value="">Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                        </FormGroup>
                        <FormGroup>
                                <label className="control-label" htmlFor="limit">
                                    Time limit
                                </label>
                                <div className="mb-2">
                                    <select name="limit" className="form-control" >
                                        <option value="">Select Option</option>
                                        <option value="0">0</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                        <option value="35">35</option>
                                        <option value="40">40</option>
                                        <option value="45">45</option>
                                        <option value="50">50</option>
                                        <option value="55">55</option>
                                        <option value="60">60</option>
                                        <option value="65">65</option>
                                        <option value="70">70</option>
                                        <option value="75">75</option>
                                        <option value="80">80</option>
                                        <option value="85">85</option>
                                        <option value="90">90</option>
                                    </select>
                                </div>
                        </FormGroup>
                        <FormGroup>
                                <label className="control-label" htmlFor="performance">
                                    Performance
                                </label>
                                <div className="mb-2">
                                    <select name="performance" className="form-control" >
                                        <option value="">Select Option</option>
                                        <option value="Time">Time</option>
                                        <option value="Moves">Moves</option>
                                        <option value="Special">Special</option>
                                    </select>
                                </div>
                        </FormGroup>
                        <FormGroup>
                                <label className="control-label" htmlFor="live">
                                    Live
                                </label>
                                <div className="mb-2">
                                    <select name="live" className="form-control" >
                                        <option value="">Select Option</option>
                                        <option value="Off">Off</option>
                                        <option value="On">On</option>
                                    </select>
                                </div>
                        </FormGroup>
                        <FormGroup>
                            <Button className="button btn-info" type="submit">
                                Save
                            </Button>
                        </FormGroup>
                        </Form> 
                        <hr/>              
                        <h4 className="mt-5">Check Data after form submit</h4> 
                        <ListGroup>
                            <ListGroupItem>Firstname: {Formvalue.firstname}</ListGroupItem>
                            <ListGroupItem>Lirstname: {Formvalue.lastname}</ListGroupItem>
                            <ListGroupItem>Username: {Formvalue.username}</ListGroupItem>
                            <ListGroupItem>Age: {Formvalue.age}</ListGroupItem>
                            <ListGroupItem>Email Id: {Formvalue.email}</ListGroupItem>
                            <ListGroupItem>Mobile No: {Formvalue.mobile}</ListGroupItem>
                            <ListGroupItem>Gender: {Formvalue.title}</ListGroupItem>
                            <ListGroupItem>Are you developer?: {Formvalue.developer}</ListGroupItem>
                        </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }

export default FormValidate;
