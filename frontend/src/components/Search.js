import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Listing from "./Listing";

const Search = () => {
  const searchInputRef = useRef();
  const [books, setBooks] = useState();
  const [searchResults, setSearchResults] = useState();

  const searchHandler = (e) => {
    e.preventDefault();
    const book = searchInputRef.current.value;
    fetch(`http://localhost:8080/api/v1/books/search/${book}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setSearchResults(true);
      });
    searchInputRef.current.value = "";
  };
  return (
    <React.Fragment>
      <Form onSubmit={searchHandler}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Search a book"
            ref={searchInputRef}
          />
        </Form.Group>
      </Form>
      {searchResults && <Listing books={books} />}
    </React.Fragment>
  );
};

export default Search;
