import { useState } from 'react';

function ReviewForm({ onSubmit, initialData }) {
  const [rating, setRating] = useState(initialData.rating);
  const [comment, setComment] = useState(initialData.comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(1);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{initialData.id ? 'Edit Review' : 'Add Review'}</h3>
      <div>
        <label>Rating (1-5):</label>
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;