import React from 'react';
import { addUserAction } from '@/actions';

export default function AddUser() {
    return (
        <form action={addUserAction} className="mt-4 flex gap-2" method="post">
            <input
                name="name"
                placeholder="New user name"
                className="px-3 py-2 border rounded flex-1"
                required
            />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add
            </button>
        </form>
    );
}
