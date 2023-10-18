import { GraphQLClient } from 'graphql-request';

const {
  // GraphCMS 엔드포인트 URL
  GRAPHCMS_ENDPOINT = '',
  // 보호된 데이터에 접근하기 위한 API 키
  GRAPHCMS_API_KEY = null,
} = process.env;
const authorization = `Bearer ${GRAPHCMS_API_KEY}`;

const graphQLClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});

export default graphQLClient;
