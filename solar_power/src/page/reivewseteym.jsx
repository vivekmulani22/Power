import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

function ReviewSystem() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [fullname, setFullname] = useState("");
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const [isLoading, setIsLoading] = useState(true);
  const [userReviews, setUserReviews] = useState([]);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/review/get`);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();

      setReviews(data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("Failed to load reviews");
      setReviews([]);
      setUserReviews(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async () => {
    if (!rating || !feedback || !fullname) {
      toast.error("Please provide rating, feedback and your name");
      return;
    }

    if (feedback.length < 10) {
      toast.error("Feedback must be at least 10 characters long");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/review/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          rating: rating,
          comment: feedback,
          fullname: fullname
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        toast.success("Review submitted successfully!");
        setReviews((prevReviews) => [newReview.data, ...prevReviews]);
        setRating(0);
        setFeedback("");
        setFullname("");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review");
    }
  };

  const handleClear = () => {
    setRating(0);
    setFeedback("");
    setFullname("");
  };

  return (
    <div className="min-h-screen bg-[url('/images/solar-bg.jpg')] bg-cover bg-fixed bg-center py-20">
      <div className="max-w-6xl mx-auto px-8" ref={ref}>
        <div
          className={`glassmorphism backdrop-blur-2xl rounded-[40px] p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-6xl font-bold text-white text-center mb-16 font-facultyGlyphic drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Illuminate Your Experience
          </h2>

          <div className="flex flex-col items-center space-y-12">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full p-4 bg-white/10 text-white border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-yellow-300/30 focus:border-yellow-300/50 placeholder-white/50 text-xl backdrop-blur-sm"
              placeholder="Your Name"
            />

            <div className="flex space-x-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="text-6xl transform hover:scale-125 transition-all duration-500 focus:outline-none hover:-rotate-12"
                >
                  <span
                    className={`${
                      star <= (hover || rating)
                        ? "text-yellow-300"
                        : "text-gray-600"
                    } drop-shadow-[0_2px_8px_rgba(255,255,0,0.5)]`}
                  >
                    ✦
                  </span>
                </button>
              ))}
            </div>

            <p className="text-white text-2xl font-josefinSans tracking-wider">
              {rating === 1 && "Seeking Brighter Days"}
              {rating === 2 && "Dawn is Breaking"}
              {rating === 3 && "Rays of Success"}
              {rating === 4 && "Brilliantly Bright"}
              {rating === 5 && "Solar Perfection"}
            </p>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-56 p-8 bg-white/10 text-white border-2 border-white/20 rounded-3xl focus:ring-4 focus:ring-yellow-300/30 focus:border-yellow-300/50 resize-none placeholder-white/50 text-xl backdrop-blur-sm"
              placeholder="Let your thoughts shine bright..."
            />

            <div className="flex space-x-10">
              <button
                onClick={handleClear}
                className="px-12 py-5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-500 transform hover:scale-110 shadow-2xl border border-white/30 backdrop-blur-sm"
              >
                Clear Canvas
              </button>
              <button
                onClick={handleSubmit}
                disabled={!rating}
                className={`px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl backdrop-blur-sm
                  ${
                    rating
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
                      : "bg-white/5 text-white/40 cursor-not-allowed border border-white/10"
                  }`}
              >
                Illuminate Others
              </button>
            </div>
          </div>

          <div className="mt-20 space-y-10">
            <div className="flex items-center justify-between text-white/90 text-lg">
              <span className="font-josefinSans">Radiance Rating</span>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-4 text-2xl">
                  {rating || "0.0"}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= rating ? "text-yellow-300" : "text-gray-600"
                      }
                    >
                      ✦
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <h3 className="text-4xl font-bold text-white mb-8 font-facultyGlyphic">
                Solar Stories
              </h3>
              {isLoading ? (
                <div className="flex items-center justify-center p-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-300 border-t-transparent"></div>
                  <p className="text-white ml-6 text-xl">Gathering Light...</p>
                </div>
              ) : reviews.length > 0 ? (
                <div
                  id="type"
                  className="max-h-[400px] overflow-y-auto pr-8 space-y-8 custom-scrollbar"
                >
                  {reviews.map((review, index) => (
                    <div
                      key={review._id || index}
                      className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/20 transition-all duration-500 hover:border-yellow-300/30 hover:transform hover:scale-[1.02] group"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`text-2xl ${
                                  star <= review.rating
                                    ? "text-yellow-300"
                                    : "text-gray-600"
                                } group-hover:rotate-[360deg] transition-all duration-1000`}
                              >
                                ✦
                              </span>
                            ))}
                          </div>
                          <span className="ml-4 text-white/70 font-josefinSans">
                            ({review.rating}/5)
                          </span>
                        </div>
                        <span className="text-white/60 text-sm font-josefinSans">
                          {new Date(review.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </span>
                      </div>
                      <p className="text-white/90 leading-relaxed text-lg font-josefinSans">
                        {review.comment}
                      </p>
                      <p className="text-white/70 mt-4 text-sm font-josefinSans">
                        - {review.fullname}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-white/90 mb-4 text-xl">
                    The canvas awaits its first stroke.
                  </p>
                  <p className="text-yellow-300 font-medium text-lg">
                    Be the pioneer in sharing your solar journey!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSystem;
