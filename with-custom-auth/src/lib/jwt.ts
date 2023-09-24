import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';

export function encode(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET);
}

export function decode(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
