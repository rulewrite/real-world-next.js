import Link from 'next/link';

export const getServerSideProps = () => {
  return {
    props: {
      users: [],
    },
  };
};

export default function Home({ users }: { users: Array<any> }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.username}`} passHref>
              {user.username}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
