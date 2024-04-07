import React from "react";

/**
 * Displays a list of reviews for a product or indicates that there are no reviews available.
 * Each review includes the username, rating, and description.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.reviews - Array of review objects to display.
 * @param {string} props.reviews[].username - The username of the reviewer.
 * @param {number} props.reviews[].rating - The rating given by the reviewer.
 * @param {string} props.reviews[].description - The text of the review.
 * @returns {React.Element} A section of HTML that either displays the reviews or a message indicating no reviews.
 *
 * @example
 * <Reviews reviews={[
 *   { username: "user1", rating: 5, description: "Great product!" },
 *   { username: "user2", rating: 4, description: "Pretty good, but could be better." }
 * ]} />
 */
const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div>
        <h3>Reviews</h3>
        <p>No reviews yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Username: {review.username}</p>
          <p>Rating: {review.rating}</p>
          <p>Description: {review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
