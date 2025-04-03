import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../api';

function BookList() {
  const [books, setBooks] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');

  useEffect(() => {
    getBooks()
      .then((response) => {
        console.log('API Response:', response.data); // Log the response
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error); // Log any errors
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.genre.toLowerCase().includes(genreFilter.toLowerCase()) &&
    book.author.toLowerCase().includes(authorFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Book Reviews</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by genre"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by author"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>
                {book.title} by {book.author} ({book.average_rating.toFixed(1)}/5)
              </Link>
            </li>
          ))
        ) : (
          <li>No books found. Check the API or add data in Django admin.</li>
        )}
      </ul>
    </div>
  );
}

export default BookList;