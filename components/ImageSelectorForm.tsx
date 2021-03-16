import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/ImageSelectorForm.module.css';
import SelectSol from './SelectSol';
import NextSol from './NextSol';
import Images from './Images';
import { photoData, roverData, imageData } from '../js/types';


interface ImageSelectorFormProps {
  currentRover: roverData
  photoInfo: {
    roverName: string
    photoInfo: photoData[]
  }[]
}

const ImageSelectorForm = ({ currentRover, photoInfo }: ImageSelectorFormProps) => {
  const [currentSol, setcurrentSol] = useState(1);
  // some days have more than 25 images - we retrieve/display up to 25 at a time
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setimages] = useState<imageData[] | null>(null);
  const [setfrominput, setSetfrominput] = useState(false);
  const [numPagesImages, setNumPagesImages] = useState(0);

  useEffect(() => {
    const photoInf_current = photoInfo.filter(({ roverName }) => roverName === currentRover.roverName);
    const numberOfImages = photoInf_current[0].photoInfo.find(({sol}) => sol == currentSol)?.total_photos;

    if (numberOfImages)
      setNumPagesImages(Math.ceil(numberOfImages / 25));

    if (setfrominput) {       // check if we were sent here from this page
      setSetfrominput(false); // re-set
      getImages();
    } else {
      setcurrentSol(1);
      setCurrentPage(1);
      getImages();
    }
  }, [currentSol, currentRover, currentPage]);



  const getImages = async () => {
    const queryInfo = {
      current_rover: currentRover.roverName,
      _page: currentPage,
      _sol: currentSol
    };

    const datas = await fetch('https://mars-rover-pics.herokuapp.com/api/imageInfo', {
      method: 'POST',
      body: JSON.stringify(queryInfo)
    });
    const photoData = await datas.json();

    setimages(photoData.photos);
  }

  const setSol = (newSol: number | string) => {
    if (typeof newSol === 'string')
      newSol = parseInt(newSol);

    if (newSol <= currentRover.lastSol && newSol > 0) {
      setCurrentPage(1);
      setSetfrominput(true);
      setcurrentSol(newSol);
    }
  }

  // nextVal can be a positive or negative number, depending
  // on wheather next or previous button was clicked
  const nextSol = (nextVal: number) => {
    const next = currentSol + nextVal;

    if (next <= currentRover.lastSol && next > 0) {
      setCurrentPage(1);
      setSetfrominput(true);
      setcurrentSol(next);
    }
  }

  const nextPage = (nextVal: number) => {
    const newPage = currentPage + nextVal;

    if (newPage > 0 && newPage <= numPagesImages) {
      setSetfrominput(true);
      setCurrentPage(newPage);
    }

  }

  return (
    <>
      <Row className={styles.formrow}>
        <Col md={4} className="text-center py-2">
          <SelectSol setSol={setSol} />
        </Col>
        <Col md={4} className="text-center py-2">
          <div className={styles.solcount}>
            Sol {currentSol} of {currentRover.lastSol}
          </div>
        </Col>
        <Col md={4} className="text-center py-2">
          <NextSol next={nextSol} />
        </Col>
      </Row>
      <Images
        photos={images}
        setPage={nextPage}
        currentPage={currentPage}
        totalPages={numPagesImages} />
    </>
  )
}

export default ImageSelectorForm;
