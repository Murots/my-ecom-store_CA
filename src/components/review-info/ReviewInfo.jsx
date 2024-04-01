import React from "react";

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
