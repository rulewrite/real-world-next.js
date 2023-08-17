import express from 'express';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

async function main() {
  try {
    await app.prepare();

    const handle = app.getRequestHandler();
    const server = express();

    server
      .get('/', (_, response) => {
        response.send('Hello world!');
      })
      .get('/about', (request, response) => {
        const { query } = parse(request.url, true);
        app.render(request, response, '/about', query);
      })
      .get('/api/greet', (request, response) => {
        response.json({ name: request?.query?.name ?? 'unknown' });
      })
      .get(/_next\/.+/, (request, response) => {
        const parsedUrl = parse(request.url, true);
        handle(request, response, parsedUrl);
      })
      .listen(3000, () => {
        console.log('server ready');
      });
  } catch (error) {
    console.log(error);
  }
}

main();
