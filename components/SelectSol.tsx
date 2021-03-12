import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/ImageSelectorForm.module.css';

interface SelectSolProps {
  setSol: (newSol: number | string) => void
}

const SelectSol = ({ setSol }: SelectSolProps) => {
  const [solInputTxt, setsolInputTxt] = useState<number | string>("");
  const solTextRef = useRef<HTMLInputElement>(null);

  const set = () => {
    setSol(solInputTxt);
    setsolInputTxt("");

    if (solTextRef && solTextRef.current)
      solTextRef.current.value = "";

  }

  return (
    <div>
      <Button variant="info" size="sm" onClick={() => set()}>
        Sol&rarr;
      </Button>
      &nbsp;&nbsp;
      <input type="text"
        ref={solTextRef}
        className={styles.solinput}
        onChange={e => setsolInputTxt(parseInt(e.target.value))} />
    </div>
  )
}

export default SelectSol;