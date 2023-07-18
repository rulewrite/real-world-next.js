import Loading from '@/components/Loading';
import Post from '@/components/Post';
import GET_POSTS from '@/lib/apollo/queries/getPosts';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

export default function Home() {
  const { loading, data } = useQuery(GET_POSTS, {
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-5">Real-World Next.js signbook</h1>
      <Link href="/new-sign">
        <button className="mb-8 border-2 border-purple-800 text-purple-900 p-2 rounded-lg text-gray-50 m-auto mt-4">
          Add new sign
        </button>
      </Link>
      <div>
        {data.posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
