import { encode } from '@/lib/jwt';
import { serialize } from 'cookie';
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

  const user = authenticateUser(email, password);
  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'Wrong email of password',
    });
  }

  return res
    .setHeader(
      'Set-Cookie',
      serialize('my_auth', user, {
        path: '/',
        httpOnly: true,
      })
    )
    .json({
      success: true,
    });
};

function authenticateUser(email: string, password: string) {
  const validEmail = 'johndoe@somecompany.com';
  const validPassword = 'strongpassword';

  if (email === validEmail && password === validPassword) {
    return encode({
      id: 'f678f078-fcfe-43ca-9d20-e8c9a95209b6',
      name: 'John Doe',
      email: 'johndoe@somecompany.com',
    });
  }

  return null;
}

export default login;
