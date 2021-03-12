import { Col, Row, Button } from "react-bootstrap";
import styles from '../styles/Pageselector.module.css';

interface PageSelectorProps {
  currentPage: number
  totalPages: number
  setPage: (nextVal: number) => void
}

const PageSelector = ({ currentPage, totalPages, setPage }: PageSelectorProps) => {
  return (
    <Row className={styles.pagerow}>
      <Col className="text-center">
        <Button variant="outline-info" size="sm" onClick={() => setPage(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </Button> &nbsp;
          {currentPage} / {totalPages} &nbsp;
          <Button variant="outline-info" size="sm" onClick={() => setPage(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </Button>
      </Col>
    </Row>
  )
}

export default PageSelector