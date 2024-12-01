import React from "react";
import "./projects.scss";
import Image1 from "./assets/paytmHP.png";
import Image2 from "./assets/SozentechPdf.png";
import Image3 from "./assets/colorConverterApp.png";
import Image4 from "./assets/vue.png";
import Image5 from "./assets/Stepper.png";
import Image6 from "./assets/Pagination.png";
import Image7 from "./assets/speech.png";

import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";

const Projects = () => {
    const ColorConverter = "https://gk-learner.github.io/color-converter/";
    const SozentechPdf =
        "https://firebasestorage.googleapis.com/v0/b/app-cost-estimator-2f21f.appspot.com/o/pdfs%2FEvJvSFBSRiepriJ.pdf?alt=media&token=959b81e2-615a-4af6-a0f0-d07afac5bd06";
    const Ravenous = "https://gk-learner.github.io/Vue3Ravenous/";
    const Stepper = "https://gk-learner.github.io/react-stepper/";
    const Pagination = "https://gk-learner.github.io/react-pagination/";
    const SpeechRecognition = "https://gk-learner.github.io/speech-recognition-app/";

    return (
        <>
            <Container fluid className="py-5" id="projects">
                <Row>
                    <Col className="d-flex w-100">
                        <h1 className="text-center text-light w-50">My Work</h1>
                        <span className="w-50">
                            <hr className="text-right" style={{borderTop: "2px solid #ffffff"}}></hr>
                        </span>
                    </Col>

                    <Col xl={12} className="d-xs-none mobPro justify-content-around mx-auto mt-3">
                        <Card className="hover-text work-card mt-5 text-center w-30">
                            <span class="tooltip-text" id="top">
                                Please open <a href="https:firstgames.in">https:firstgames.in</a> to see
                            </span>

                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title className="text-light"> Learning </Card.Title>
                                <Card.Text>
                                    <div
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "1.4s",
                                            animationName: "slideInUp",
                                            width: "100%",
                                            display: "flex",
                                            fontSize: "10px",
                                            justifyContent: "space-between",
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <button>HTML5</button>
                                        <button>CSS3</button>
                                        <button>Javascript</button>
                                        <button>Bootstrap</button>
                                        <button>Jira</button>
                                        <button>jQuery</button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={SozentechPdf} target="blank">
                                <Card.Img variant="top" src={Image2} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>HTML5</button>
                                            <button>CSS3</button>
                                            <button>Javascript</button>
                                            <button>Bootstrap</button>
                                            <button>Firebase</button>
                                            <button>Git</button>
                                            <button>Jira</button>
                                            <button>Figma</button>
                                            <button>jQuery</button>
                                            <button>EmailJs</button>
                                            <button>PDFMake</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={ColorConverter} target="blank">
                                <Card.Img variant="top" src={Image3} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>HTML</button>
                                            <button>CSS</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={Ravenous} target="blank">
                                <Card.Img variant="top" src={Image4} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>Vuex</button>
                                            <button>Vue3</button>
                                            <button>Javascript</button>
                                            <button>Tailwind CSS</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={Stepper} target="blank">
                                <Card.Img variant="top" src={Image5} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>Animation</button>
                                            <button>React</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={Pagination} target="blank">
                                <Card.Img variant="top" src={Image6} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>React</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>

                        <Card className="work-card mt-5 text-center w-30">
                            <a href={SpeechRecognition} target="blank">
                                <Card.Img variant="top" src={Image7} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "100%",
                                                display: "flex",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>SCSS</button>
                                            <button>React</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>

                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        {/* <a href={project_1_link} target="blank"> */}
                        <Card className="work-card mt-5 text-center">
                            <span class="tooltip-text" id="top">
                                Please open <a href="https:firstgames.in">https:firstgames.in</a> to see
                            </span>

                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title className="text-light"> Learning </Card.Title>
                                <Card.Text>
                                    <div
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "1.4s",
                                            animationName: "slideInUp",
                                            width: "98%",
                                            fontSize: "10px",
                                            justifyContent: "space-between",
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <button>HTML5</button>
                                        <button>CSS3</button>
                                        <button>Javascript</button>
                                        <button>Bootstrap</button>
                                        <button>Jira</button>
                                        <button>jQuery</button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={SozentechPdf} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image2} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>HTML5</button>
                                            <button>CSS3</button>
                                            <button>Javascript</button>
                                            <button>Bootstrap</button>
                                            <button>Firebase</button>
                                            <button>Git</button>
                                            <button>Jira</button>
                                            <button>Figma</button>
                                            <button>jQuery</button>
                                            <button>EmailJs</button>
                                            <button>PDFMake</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>

                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={SozentechPdf} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image3} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>HTML5</button>
                                            <button>CSS3</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>

                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={Ravenous} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image4} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>Vue3</button>
                                            <button>Vuex</button>
                                            <button>Javascript</button>
                                            <button>Tailwind CSS</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={Stepper} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image5} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>React</button>
                                            <button>Javascript</button>
                                            <button>Animation</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={Pagination} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image6} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>React</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col
                        sm={12}
                        className="d-lg-none d-sm-none d-md-none d-xl-none justify-content-around mx-auto mt-3 d-flex"
                    >
                        <a href={SpeechRecognition} target="blank">
                            <Card className="work-card mt-5 text-center">
                                <Card.Img variant="top" src={Image7} />
                                <Card.Body>
                                    <Card.Title className="text-light"> Learning </Card.Title>
                                    <Card.Text style={{color: "red"}}>
                                        <div
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "1.4s",
                                                animationName: "slideInUp",
                                                width: "98%",
                                                fontSize: "10px",
                                                justifyContent: "space-between",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button>SCSS</button>

                                            <button>React</button>
                                            <button>Javascript</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Projects;
