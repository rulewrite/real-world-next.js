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
      <img
        src={user.profile_picture}
        alt={user.username}
        width={150}
        height={150}
      />
      <div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Full name:</b> {user.first_name} {user.last_name}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Company:</b> {user.company}
        </div>
        <div>
          <b>Job title:</b> {user.job_title}
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
      const request = await fetch(`/api/04/users/${id}`, {
        headers: { authorization },
      });

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
