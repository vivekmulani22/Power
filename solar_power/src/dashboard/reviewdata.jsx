import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth'

const ReviewData = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { AuthorizationToken } = useAuth();

    useEffect(() => {
        getAllReviews();
    }, []);

    const getAllReviews = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/reviews`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${AuthorizationToken}`,
                }
            });
            const data = await response.json();
            if (data && Array.isArray(data.reviews)) {
                setReviews(data.reviews);
            } else {
                setReviews([]);
                setError("Invalid data format received");
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
            setReviews([]);
        }
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>;
    
    if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
    </div>;
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Customer Reviews
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <div className="flex items-center mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-6 h-6 ${index < review.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4">{review.comment}</p>
                            <div className="flex justify-end space-x-2">
                                <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                                    Delete
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 bg-gray-800 rounded-lg">
                        <p className="text-gray-400 text-lg">No reviews found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewData;
