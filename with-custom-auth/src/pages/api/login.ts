import { NextApiRequest, NextApiResponse } from 'next';

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(404).end();
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Missing required params',
    });
  }
};

export default login;
