import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function imageInfo(req: NextApiRequest, res: NextApiResponse) {
    const { current_rover, _page, _sol } = JSON.parse(req.body);
    
    const ans = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${current_rover}/photos?page=${_page}&sol=${_sol}&api_key=${process.env.NASA_API_KEY}`);
    
    res.status(200).json(ans.data)
}