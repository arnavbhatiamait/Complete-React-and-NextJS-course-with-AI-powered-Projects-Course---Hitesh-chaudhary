import React from 'react'
import { getUser } from '../lib/users';

const UserList = async () => {
const users = await getUser();
console.log("Users in UserList component:", users);
  return (
    <div>
      {users.map((user: { id: string; name: string }) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList

