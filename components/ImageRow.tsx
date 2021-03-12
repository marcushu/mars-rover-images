import { Col, Row, Card } from "react-bootstrap";
import { imageData } from "../js/types";

interface ImageRowProps {
  photo: imageData
}

const ImageRow = ({ photo }: ImageRowProps) => {
  return (
    <Row className="py-4">
      <Col className="d-flex justify-content-center">
        <Card className="mb-3" style={{ width: "740px" }}>
          <Row className="no-gutters">
            <Col md={4}>
              <a href={photo.img_src} target="_blank">
                <img src={photo.img_src} className="card-img" alt="surface image" />
              </a>
            </Col>
            <Col md={8}>
              <div className="card-body">
                <p>{photo.rover.name} rover</p>
                <h5>{photo.camera.full_name}</h5>
                <p>Id: {photo.id}</p>
                <h5>Taken: {photo.earth_date}</h5>
                <p className="card-text"><small className="text-muted">status: {photo.rover.status}</small></p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default ImageRow