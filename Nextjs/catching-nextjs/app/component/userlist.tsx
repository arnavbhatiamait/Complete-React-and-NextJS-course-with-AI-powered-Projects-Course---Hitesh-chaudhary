import React from 'react';
import { getUserList, deleteUserAction } from '@/actions';

const UserList = async () => {
    const users = await getUserList();
    console.log('Users in UserList component:', users);

    if (!users || users.length === 0) {
        return <p className="text-gray-500">No users found.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map((user: { id: string; name: string; avatar?: string; createdAt?: string }) => (
                <div key={user.id} className="flex items-center justify-between gap-4 p-4 bg-white rounded shadow">
                    <div className="flex items-center gap-4">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
                        ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-full" />
                        )}

                        <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{user.name}</div>
                            {user.createdAt && (
                                <div className="text-xs text-gray-500">{new Date(user.createdAt).toLocaleString()}</div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <form action={deleteUserAction} method="post">
                            <input type="hidden" name="id" value={user.id} />
                            <button type="submit" className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;

