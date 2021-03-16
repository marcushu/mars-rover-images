import Head from 'next/head';
import axios from "axios";
import { useState } from "react";
import AboutImages from "../components/AboutImages";
import ImageSelectorForm from "../components/ImageSelectorForm";
import Overview from "../components/Overview";
import RoverFooter from "../components/RoverFooter";
import RoverSelector from "../components/RoverSelector";
import TitleHeader from "../components/TitleHeader";
import { curiosithyManifest, opportunityManifest, spiritManifest } from "../js/apiEndpoints";
import { localCuriosityInfo, localOpportunityInfo, localSpiritInfo } from "../js/roverdata";
import { photoData, roverData } from '../js/types';


interface HomeProps {
  curiosityDTA: roverData
  spiritDTA: roverData
  opportunityDTA: roverData
  photoData: {
    roverName: string
    photoInfo: photoData[]
  }[]
}

export default function Home({ curiosityDTA, spiritDTA, opportunityDTA, photoData }: HomeProps) {
  const [currentRover, setcurrentRover] = useState(curiosityDTA);
  const [curiosity] = useState(curiosityDTA);
  const [spirit] = useState(spiritDTA);
  const [opportunity] = useState(opportunityDTA);


  return (
    <>
      <Head>
        <title>Mars Rover Photos</title>
        <link rel="shortcut icon" href="/favicon.jpeg"/>
      </Head>
      <TitleHeader />
      <RoverSelector
        currentRoverData={currentRover}
        curiosityData={curiosity}
        opportunityData={opportunity}
        spiritData={spirit}
        setCurrentRover={setcurrentRover} />
      <Overview
        thisRover={currentRover} />
      <AboutImages />
      <ImageSelectorForm
        currentRover={currentRover}
        photoInfo={photoData} />
      <RoverFooter />
    </>
  )
}

export async function getStaticProps() {
  try {
    const curiosityRes = await axios.get(curiosithyManifest);
    const spriritRes = await axios.get(spiritManifest);
    const opportunityRes = await axios.get(opportunityManifest);

    // These values need to be updated to reflect the status of an ongoing mission
    localCuriosityInfo.lastSol = curiosityRes.data.photo_manifest.max_sol;
    localCuriosityInfo.lastDate = curiosityRes.data.photo_manifest.max_date;
    localCuriosityInfo.totalPhotos = curiosityRes.data.photo_manifest.total_photos;

    return {
      props: {
        curiosityDTA: localCuriosityInfo,
        spiritDTA: localSpiritInfo,
        opportunityDTA: localOpportunityInfo,
        photoData: [
          {
            roverName: "Curiosity",
            photoInfo: curiosityRes.data.photo_manifest.photos
          },
          {
            roverName: "Spirit",
            photoInfo: spriritRes.data.photo_manifest.photos
          },
          {
            roverName: "Opportunity",
            photoInfo: opportunityRes.data.photo_manifest.photos
          }
        ]
      }
    }

  } catch (error) {
    console.error(error);
  }
}
