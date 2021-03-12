import { Button } from "react-bootstrap"

interface NexSolProps {
  next: (newSol: number) => void
}

const NextSol = ({ next }: NexSolProps) => {
  return (
    <div>
      <Button variant="info" size="sm" onClick={() => next(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          className="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path
            d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </Button>
          &nbsp;
      <Button variant="info" size="sm" onClick={() => next(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          className="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path
            d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </Button>
    </div>
  )
}

export default NextSol;