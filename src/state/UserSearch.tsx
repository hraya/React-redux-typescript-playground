import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => {
      return user.name === name;
    });
    console.log('found', foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      UserSearch
      <div>
        <input
          style={{ marginRight: 10 }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={onClick}>Find User</button>
      </div>
      <div>
        User Details
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>{user && `User Name: ${user.name}`}</span>
          <span>{user && `User Age: ${user.age}`}</span>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
