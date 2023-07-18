import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;
  const API_ENDPOINT = process.env.API_ENDPOINT;
  const API_TOKEN = process.env.API_TOKEN;

  const userRequest = await axios.get(`${API_ENDPOINT}/users/${id}`, {
    headers: { authorization: API_TOKEN },
  });

  response.status(200).json(userRequest.data);
};

export default handler;
