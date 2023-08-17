import { GetServerSideProps } from 'next';
import { FC } from 'react';

export const getServerSideProps: GetServerSideProps = async (request) => {
  return {
    props: {
      user: request.params?.user,
    },
  };
};

const GreetUser: FC<{ user: string }> = ({ user }) => {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  );
};

export default GreetUser;
