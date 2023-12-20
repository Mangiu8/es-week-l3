import React, { useState } from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Search books..." value={searchTerm} onChange={handleInputChange} />
      {books
        .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
    </>
  );
};

export default BookList;
