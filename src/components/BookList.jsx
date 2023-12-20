import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <>
    {books.map((book) => (
      <SingleBook key={book.asin} book={book} />
    ))}
    <input />
  </>
);

export default BookList;
