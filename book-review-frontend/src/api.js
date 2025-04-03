import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

// Fetch all books
export const getBooks = () => axios.get(`${API_URL}books/`);

// Fetch a single book by ID
export const getBook = (id) => axios.get(`${API_URL}books/${id}/`);

// Create a review
export const createReview = (bookId, review) =>
  axios.post(`${API_URL}books/${bookId}/reviews/`, review);

// Update a review
export const updateReview = (reviewId, review) =>
  axios.put(`${API_URL}reviews/${reviewId}/`, review);

// Delete a review
export const deleteReview = (reviewId) =>
  axios.delete(`${API_URL}reviews/${reviewId}/`);