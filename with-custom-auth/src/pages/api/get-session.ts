import { decode } from '@/lib/jwt';
import { parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const getSession = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') {
    return response.status(404).end();
  }

  const { my_auth } = parse(request.headers.cookie ?? '');

  if (!my_auth) {
    return response.json({
      loggedIn: false,
    });
  }

  return response.json({
    loggedIn: true,
    user: decode(my_auth),
  });
};

export default getSession;
