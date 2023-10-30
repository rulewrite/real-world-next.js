import { GraphQLClient } from 'graphql-request';

/*
NEXT_PUBLIC_은 구조분해가 안된다. https://github.com/vercel/next.js/discussions/34957
const {
  NEXT_PUBLIC_GRAPHCMS_ENDPOINT: GRAPHCMS_ENDPOINT = '',
  GRAPHCMS_API_KEY = null,
} = process.env;
*/

// GraphCMS 엔드포인트 URL
const GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? '';
// 보호된 데이터에 접근하기 위한 API 키
const GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;

const authorization = `Bearer ${GRAPHCMS_API_KEY}`;

const graphQLClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});

export default graphQLClient;
