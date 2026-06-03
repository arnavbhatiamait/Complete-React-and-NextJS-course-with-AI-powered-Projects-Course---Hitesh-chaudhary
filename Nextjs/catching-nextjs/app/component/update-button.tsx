import React from 'react';
import { updateTheList } from '@/actions';

export default function UpdateButton() {
    return (
        <form action={updateTheList} className="mt-6">
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Refresh Users
            </button>
        </form>
    );
}
