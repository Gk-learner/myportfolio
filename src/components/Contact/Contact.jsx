import React, {useRef} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import lkdn from "./assets/LogoLinkedIn.jpg";
import email from "./assets/phone-call-icon-16.png";
import github from "./assets/github.jpg";
import "./contact.scss";
import {zoomIn} from "react-animations";
import styled, {keyframes} from "styled-components";

import {Col, Container, Row} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Card from "react-bootstrap/Card";

const ZoomIn = styled.div`
    animation: 2s ${keyframes`${zoomIn}`};
`;

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_5ii50j5", "template_0l2lfjm", form.current, "CrUTHoMlh9E5q2o1M").then(
            (result) => {
                alert("Message sent");
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <>
            <Container fluid id="contact">
                <Row className="d-flex justify-content-space-around">
                    <h1 className="text-center text-light pt-4 mt-5">Get in touch</h1>

                    <Col sm={12} lg={6} xl={7} className="col px-5 align-content-center">
                        <ZoomIn>
                            <Form className="m-3 p-1 text-light text-left" ref={form} onSubmit={sendEmail}>
                                <Form.Group className="mx-5 my-3 text-left" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="user_name"
                                        type="name"
                                        placeholder="Your name please"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mx-5 text-left" controlId="exampleForm.ControlInput1" required>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="user_email" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mx-5 my-3" controlId="exampleForm.ControlTextarea1" required>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" as="textarea" rows={4} />
                                </Form.Group>
                                <Button className="subscribe-button mx-5 w-30 mb-4" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </ZoomIn>
                    </Col>
                    <Col sm={12} lg={5} xl={4} className="mt-5">
                        <Card className="py-3 d-lg-block d-md-block d-xl-block justify-content-evenly footer">
                            <span className="">
                                <a className="mt-4 mx-auto" href="https://linkedin.com/in/gagandeep-kour">
                                    <img
                                        src={lkdn}
                                        style={{height: "35px", marginLeft: "10px", maginRight: "25px"}}
                                        alt="linkedinImg"
                                    />
                                    <span> https://www.linkedin.com/in/gagandeep-kour/</span>
                                </a>
                            </span>

                            <span>
                                <a className=" mt-4 d-flex mx-auto" href="tel:587-969-4981">
                                    <img
                                        src={email}
                                        style={{height: "42px", marginLeft: "10px", maginRight: "15px"}}
                                        alt="emailImg"
                                    />
                                    <span className="ml-8"> 587-969-4981</span>{" "}
                                </a>
                            </span>
                            {/* <span>
                                <a className="mt-4 d-flex mx-auto" href="tel:587-969-4981">
                                    <img src={github} style={{height: "42px", marginLeft: "10px"}} alt="emailImg" />
                                    <span className="">Github Link</span>{" "}
                                </a>
                            </span> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;
