import { flipInX } from "react-animations";
import "./skills.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { Col, Container, Row } from "react-bootstrap";

const FlipInX = styled.div`animation: 2s ${keyframes`${flipInX}`}`;
const Skills = () => {
    return(
        <>
         <Container fluid className="pt-5" id="skills">
            <Row>
               <Col xs={8} style={{ margin: "0 auto"}}>
                <Card className="mt-5 text-center card1"> 
                    <Card.Body>
                       <FlipInX> <Card.Text> 
                            <Button variant="outline-light" className="mb-2 mt-2">HTML5</Button>{' '}
                            <Button variant="outline-light" className="mx-2">CSS3</Button>{' '}
                            <Button variant="outline-light" className="mx-2">JavaScript</Button>{' '}
                            <Button variant="outline-light" className="m-2">React</Button>{' '}
                            <Button variant="outline-light" className="mx-2">Vue</Button>{' '}
                            <Button variant="outline-light" className="mx-2">React Bootstrap</Button>{' '}
                            <Button variant="outline-light" className="m-2">Git</Button>{' '}
                            <Button variant="outline-light" className="mx-2">Figma</Button>{' '}
                            <Button variant="outline-light" className="mx-2">SQL</Button>{' '}
                            <Button variant="outline-light" className="mx-2">TDD</Button>{' '}
                            <Button variant="outline-light" className="mx-2">Jira</Button>{' '}
                            <Button variant="outline-light" className="mx-2">jQuery</Button>{' '}
                        </Card.Text>
                        </FlipInX>   
                    </Card.Body>
                </Card> 
                </Col>
            </Row>
    </Container>
      </>
    )
}
export default Skills