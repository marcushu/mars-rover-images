import { Row } from "react-bootstrap";
import RoverSelectorCard from "./RoverSelectorCard";
import { roverData } from '../js/types';

interface RoverSelectorProps {
  currentRoverData: roverData
  curiosityData: roverData
  opportunityData: roverData
  spiritData: roverData
  setCurrentRover: (rover: roverData) => void
}

const RoverSelector = ({ currentRoverData, curiosityData, opportunityData, spiritData, setCurrentRover }: RoverSelectorProps) => {
  return (
    <Row>
      <RoverSelectorCard
        thisRover={curiosityData}
        selectedRover={currentRoverData}
        setCurrentRover={setCurrentRover} />
      <RoverSelectorCard
        thisRover={opportunityData}
        selectedRover={currentRoverData}
        setCurrentRover={setCurrentRover} />
      <RoverSelectorCard
        thisRover={spiritData}
        selectedRover={currentRoverData}
        setCurrentRover={setCurrentRover} />
    </Row>
  )
}

export default RoverSelector;