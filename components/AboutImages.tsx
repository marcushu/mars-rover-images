import { Col, Row } from "react-bootstrap"
import styles from '../styles/AboutImages.module.css';

const AboutImages = () => {
  return (
    <Row className={styles.lighter}>
      <Col md={6} className="py-4">
        <h2>About the images</h2>
        <p>
          Each rover has its own set of photos available from a vaiety of on-board cameras. All three rovers
          are equipped with front and rear Hazard Avoidance and navigation cameras. Other cameras are available
          depending on the rover and its mission.
        </p>
      </Col>
      <Col md={6} className="py-4">
        <h2>Selecting</h2>
        <p>
          The photos are organized by sol (martian day) counting up from the rovers landing date.
          Selecting a sol will return any images taken on that Martian day.  
        </p>
      </Col>
    </Row>
  )
}

export default AboutImages