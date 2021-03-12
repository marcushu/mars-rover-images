import { Col, Row } from "react-bootstrap";
import styles from '../styles/TitleHeader.module.css';

const TitleHeader = () => {
  return (
    <Row className={styles.titlerow}>
      <Col md="6">
        <span className={styles.titletitle}>Mars Rover Photos</span>
      </Col>
      <Col md="6" className="fw-lighter fst-italic">
        Explore a comprehensive collection of photographs from NASA's Curiosity, Opportunity, and Spirit rovers.
      </Col>
    </Row>
  )
}

export default TitleHeader;