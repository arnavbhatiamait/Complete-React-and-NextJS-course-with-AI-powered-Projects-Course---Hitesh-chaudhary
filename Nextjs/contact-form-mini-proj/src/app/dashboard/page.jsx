import { connectToDB } from '@/lib/db'
import { contacts } from '@/lib/model/contact';
import React from 'react'
import StatusButton from '@/components/status-btn';

const Dashboard = async () => {
  await connectToDB();
  const Contact= await contacts.find({});
    return (
    <div className="p-18 ">
        <h1 className="text-2xl mb-6 font-bold">Contacts</h1>
        <div className="space-y-4">
            {Contact.map((contact) => (
                <div key={contact._id} className="border p-4 rounded">
                    <h2 className="text-xl font-semibold">{contact.name}</h2>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="mt-2">{contact.message}</p>
                    <p className="mt-2 text-sm text-gray-500">Status: {contact.status}</p>
                    <StatusButton id={contact._id.toString()} />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Dashboard
