import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const logout = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(404).end();
  }

  return res
    .setHeader(
      'Set-Cookie',
      serialize('my_auth', '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
      })
    )
    .json({
      success: true,
    });
};

export default logout;
