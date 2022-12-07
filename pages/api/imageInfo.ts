import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors';

const apiKey = process.env.NASA_KEY

const cors = Cors({
    methods: ['POST']
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          console.error("middleware error: " + result);
        }
  
        return resolve(result)
      })
    })
  }

export default async function imageInfo(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors);

    const { current_rover, _page, _sol } = JSON.parse(req.body);
    
    const ans = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${current_rover}/photos?page=${_page}&sol=${_sol}&api_key=${apiKey}`);
    
    res.status(200).json(ans.data)
}