import Link from 'next/link';
import { useEffect, useState } from 'react';

const List = ({ users }: { users: Array<any> }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      const req = await fetch('/api/04/users');
      const users = await req.json();

      setLoading(false);
      setData(users);
    };

    fecthData();
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  );
};

export default Users;
