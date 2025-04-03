import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook, createReview, updateReview, deleteReview } from '../api';
import ReviewForm from './ReviewForm';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    getBook(id).then((response) => setBook(response.data));
  }, [id]);

  // Add or update a review
  const handleReviewSubmit = (reviewData) => {
    if (editingReview) {
      updateReview(editingReview.id, reviewData).then(() => {
        setEditingReview(null);
        refreshBook();
      });
    } else {
      createReview(id, reviewData).then(() => refreshBook());
    }
  };

  // Delete a review
  const handleDeleteReview = (reviewId) => {
    deleteReview(reviewId).then(() => refreshBook());
  };

  // Refresh book data after changes
  const refreshBook = () => {
    getBook(id).then((response) => setBook(response.data));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Published: {book.published_year}</p>
      <p>Average Rating: {book.average_rating.toFixed(1)}/5</p>

      <h2>Reviews</h2>
      <ul>
        {book.reviews.map((review) => (
          <li key={review.id}>
            Rating: {review.rating}/5 - {review.comment} (at {new Date(review.timestamp).toLocaleString()})
            <button onClick={() => setEditingReview(review)}>Edit</button>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <ReviewForm
        onSubmit={handleReviewSubmit}
        initialData={editingReview || { rating: 1, comment: '' }}
      />
    </div>
  );
}

export default BookDetails;