import express from 'express';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

async function main() {
  try {
    // Next.js 앱 실행할 준비가 될 때까지 대기
    await app.prepare();

    // Next.js를 대신하여 요청을 처리할 handle
    const handle = app.getRequestHandler();
    const server = express();

    server
      .get('*', (request, response) => {
        const url = parse(request.url, true);
        handle(request, response, url);
      })
      .listen(3000, () => {
        console.log('server ready');
      });
  } catch (error) {
    console.log(error);
  }
}

main();
