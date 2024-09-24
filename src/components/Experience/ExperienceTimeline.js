import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Particle from '../Particle';

const ExperienceTimeline = () => {
  return (
    <Container fluid className="experience-section" style={{ paddingBottom: '100px' }}> {/* Added paddingBottom */}
      <Particle />
      <Container>
        {/* Add consistent padding */}
        <Row style={{ justifyContent: 'center', padding: '10px', paddingTop: '150px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px', color: 'white' }}>
              My <strong className="purple">Experience</strong>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <VerticalTimeline>
              {/* Full Stack Developer Experience */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
                <h3 className="vertical-timeline-element-title">Full Stack Developer | AIME</h3>
                <h4 className="vertical-timeline-element-subtitle">2023</h4>
                <ul>
                  <li>Developed frontend and backend applications using TypeScript, JavaScript, Node.js, and MongoDB.</li>
                  <li>Collaborated on AI, 3D, and Metaverse projects in an agile environment.</li>
                  <li>Built a platform for designers to upload and view models in real-time.</li>
                </ul>
              </VerticalTimelineElement>

              {/* Education */}
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020 – 2024"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">B.Sc. Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Hadassah Academic College</h4>
              </VerticalTimelineElement>

              {/* Operation Manager Experience */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
                <h3 className="vertical-timeline-element-title">Operations Manager | City of David</h3>
                <h4 className="vertical-timeline-element-subtitle">2016 - 2019</h4>
                <ul>
                  <li>Managed staff and coordinated VIP visits and events.</li>
                  <li>Focused on team leadership and operational efficiency.</li>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExperienceTimeline;
