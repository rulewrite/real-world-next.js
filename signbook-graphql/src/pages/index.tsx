import { useQuery } from '@apollo/client';
import GET_LATEST_SIGNS from '../../lib/apollo/queries/getLastestSigns';

export default function Home() {
  const { loading, data } = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache',
  });

  return <div></div>;
}
