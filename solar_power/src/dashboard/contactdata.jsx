import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth'

const ContactData = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { AuthorizationToken } = useAuth();

    useEffect(() => {
        getAllContacts();
    }, []);

    const getAllContacts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken,
                }
            });
            const data = await response.json();
            if (data && Array.isArray(data.contacts)) {
                setContacts(data.contacts);
            } else {
                setContacts([]);
                setError("Invalid data format received");
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
            setContacts([]);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Data</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 text-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Message</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(contacts) && contacts.length > 0 ? (
                            contacts.map((contact) => (
                                <tr key={contact._id}>
                                    <td className="border px-4 py-2">{contact.name}</td>
                                    <td className="border px-4 py-2">{contact.email}</td>
                                    <td className="border px-4 py-2">{contact.message}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2">
                                            Delete
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border px-4 py-2 text-center">
                                    No contacts found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactData;
