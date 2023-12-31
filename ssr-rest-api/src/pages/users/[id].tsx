import axios, { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    // const userRequest = await axios.get(`http://localhost:3000/api/04/users/${username}`);
    const userRequest = await axios.get(
      `${process.env.API_ENDPOINT}/users/${id}`,
      {
        headers: {
          authorization: process.env.API_TOKEN,
        },
      }
    );

    return {
      props: {
        user: userRequest.data,
      },
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      notFound: true,
    };
  }
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
    </div>
  );
};

export default UserPage;
