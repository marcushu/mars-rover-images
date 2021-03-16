import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { roverData } from '../js/types';
import styles from '../styles/RoverSelectorCard.module.css';

interface RovercardProps {
  thisRover: roverData
  selectedRover: roverData
  setCurrentRover: (rover: roverData) => void
}

const RoverSelectorCard = ({ thisRover, selectedRover, setCurrentRover }: RovercardProps) => {
  const [isSelected, setisSelected] = useState(false);

  useEffect(() => {
    setisSelected(selectedRover.roverName === thisRover.roverName);
  }, [selectedRover]);
  

  return (
    <a href="#"
      className="col-md py-4"
      style={isSelected ? { backgroundColor: "rgb(82,82,82)" } : {}} //conditional rendere if active
      id={styles.main}
      onClick={() => setCurrentRover(thisRover)}>
      <Row className="pb-3">
        <Col className={styles.selectortitle}>
          {thisRover.roverName}
        </Col>
      </Row>
      <Row>
        <Col>
          Launch Date:
        </Col>
        <Col className="fw-lighter">
          {thisRover.launchDate}
        </Col>
      </Row>
      <Row>
        <Col>
          Landing Date:
        </Col>
        <Col className="fw-lighter">
          {thisRover.landingDate}
        </Col>
      </Row>
      <Row>
        <Col>
          Last Date:
         </Col>
        <Col className="fw-lighter">
          {thisRover.lastDate}
        </Col>
      </Row>
      <Row className="pt-2">
        <Col>
          Total sols:
         </Col>
        <Col>
          {thisRover.lastSol}
        </Col>
      </Row>
      <Row>
        <Col>
          Imgage Count:
         </Col>
        <Col>
          <span className="badge bg-secondary">{thisRover.totalPhotos}</span>
        </Col>
      </Row>
    </a>
  )

}

export default RoverSelectorCard;
