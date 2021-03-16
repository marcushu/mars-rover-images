import { Col, Row } from "react-bootstrap"
import { imageData } from "../js/types";
import ImageRow from "./ImageRow";
import PageSelector from "./PageSelector";

interface ImagesProps {
  photos: imageData[] | null
  setPage: (nextVal: number) => void
  currentPage: number
  totalPages: number
}


const Images = ({ photos, setPage, currentPage, totalPages }: ImagesProps) => {
  return (
    <>
      {!!photos?.length &&
        < PageSelector
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages} />}
      {!!photos?.length
        ?
        photos?.map(photo =>
          <ImageRow photo={photo} key={photo.id} />)
        :
        <Row className="py-4">
          <Col>
            <span style={{ color: "grey", fontSize: "30px" }}>
              No images available for this sol.
            </span>
          </Col>
        </Row>
      }
      {!!photos?.length &&
        < PageSelector
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages} />}
    </>
  )
}

export default Images
