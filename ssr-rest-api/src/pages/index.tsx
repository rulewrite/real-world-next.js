import axios from 'axios';
import Link from 'next/link';

export const getServerSideProps = async () => {
  // const usersRequest = await axios.get('https://api.rwnjs.com/04/users');
  // 책 예제가 동작하지 않으므로 jsonplaceholder로 대체
  const usersRequest = await axios.get(`${process.env.API_ENDPOINT}/users`);

  return {
    props: {
      users: usersRequest.data,
    },
  };
};

export default function Home({ users }: { users: Array<any> }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} passHref>
              {user.username}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
