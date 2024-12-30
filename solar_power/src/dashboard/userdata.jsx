import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth'

const UserData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { AuthorizationToken } = useAuth();

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/users", {
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken,
                }
            });
            const data = await response.json();
            // Ensure data.users exists and is an array
            if (data && Array.isArray(data.users)) {
                setUsers(data.users);
            } else {
                setUsers([]); // Set empty array if no valid data
                setError("Invalid data format received");
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
            setUsers([]); // Ensure users is an array even on error
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">User Data</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 text-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(users) && users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td className="border px-4 py-2">{user.username}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
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
                                <td colSpan="3" className="border px-4 py-2 text-center">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserData;
