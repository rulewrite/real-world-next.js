import { useQuery } from '@apollo/client';
import GET_POSTS from '../../lib/apollo/queries/getPosts';

export default function Home() {
  const { loading, data } = useQuery(GET_POSTS, {
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.posts.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
