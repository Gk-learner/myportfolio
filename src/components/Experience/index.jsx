import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useIntersection } from "react-use";

const experiences = [
  {
    role: "Web Developer",
    company: "Firstgames",
    duration: "JUN 2018 - JUN 2022",
    description: "Developed and maintained web applications using React and Node.js.",
  },
  {
    role: "Frontend Developer",
    company: "Paytm",
    duration: "Jun 2022 - NOV 2022",
    description: "Created responsive UI components using React and Bootstrap.",
    },
    {
        role: "React Frontend Developer",
        company: "SkyIT Services",
        duration: "NOV 2023 Onwards",
        description: "Created responsive UI components using React and Bootstrap.",
      },
  // Add more experiences as needed
];

const StyledCard = styled(animated.div)`
  cursor: pointer;
  will-change: transform, opacity;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.05);
  }
`;

const Experience = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2 className="text-center text-light">Experience</h2>
        </Col>
      </Row>
      <Row>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </Row>
    </Container>
  );
};

const ExperienceCard = ({ experience }) => {
  const ref = useRef();
  const intersection = useIntersection(ref, { root: null, rootMargin: "0px", threshold: 0.1 });

  const animation = useSpring({
    opacity: intersection && intersection.intersectionRatio > 0 ? 1 : 0,
    transform: intersection && intersection.intersectionRatio > 0 ? "translateY(0)" : "translateY(20px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <Col md={6} ref={ref}>
      <StyledCard style={animation}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{experience.role}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{experience.company}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{experience.duration}</h6>
            <p className="card-text">{experience.description}</p>
          </div>
        </div>
      </StyledCard>
    </Col>
  );
};

export default Experience;
