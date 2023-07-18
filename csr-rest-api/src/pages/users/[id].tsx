import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  return {
    props: {
      id: query.id,
      authorization: process.env.API_TOKEN,
    },
  };
};

const UserData = ({ user }: { user: any }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Company:</b> {user.company.name}
        </div>
      </div>
    </div>
  );
};

const UserPage = ({
  id,
  authorization,
}: {
  id: string;
  authorization: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          headers: { authorization },
        }
      );

      const data = await request.json();

      setLoading(false);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
      {loading && <div>Loading user data...</div>}
      {data && <UserData user={data} />}
    </div>
  );
};

export default UserPage;
