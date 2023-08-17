import express from 'express';

async function main() {
  try {
    const server = express();

    server
      .get('/', (_, response) => {
        response.send('Hello world!');
      })
      .get('/api/greet', (request, response) => {
        response.json({ name: request?.query?.name ?? 'unknown' });
      })
      .listen(3000, () => {
        console.log('server ready');
      });
  } catch (error) {
    console.log(error);
  }
}

main();
