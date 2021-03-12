import { Col, Row } from "react-bootstrap"

const RoverFooter = () => {
  return (
    <Row>
      <Col className="text-center py-3 fw-lighter" style={{backgroundColor: "grey", color: "white"}}>
        Images courtesy of NASA.
      </Col>
    </Row>
  )
}

export default RoverFooter;