import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;
  const userRequest = await axios.get(
    `http://localhost:3000/api/04/users/${username}`
  );

  return {
    props: {
      user: userRequest.data,
    },
  };
};

const UserPage = ({ user }: { user: any }) => {
  return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
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
    </div>
  );
};

export default UserPage;
