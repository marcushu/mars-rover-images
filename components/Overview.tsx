import { Button, Col, Row } from "react-bootstrap"
import { roverData } from "../js/types";
import styles from '../styles/Overview.module.css';

interface OverviewProps {
  thisRover: roverData
}

const Overview = ({ thisRover }: OverviewProps) => {
  return (
    <Row className={styles.rowclass}>
      <Col md={6} className="p-4 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2>{thisRover.roverName} Overview</h2>
          <br />
          <p>{thisRover.overview}</p>
          <Button
            variant="info"
            style={{ color: "white" }}
            href={thisRover.nasaHref}
            target="_blank">
            more from NASA &nbsp;&nbsp;
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="currentColor"
              className="bi bi-arrow-up-right-circle" 
              viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
            </svg>
          </Button>
        </div>
      </Col>
      <Col md={6} className="d-flex align-items-center justify-content-center">
        <img
          style={{maxWidth: "100%", maxHeight: "350px"}}
          src={thisRover.imageName}
          alt="curiosity image"/>
      </Col>
    </Row>
  )
}

export default Overview