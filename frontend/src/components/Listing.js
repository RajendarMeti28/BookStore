import React from "react";
import { Card, Table, ButtonGroup, Button } from "react-bootstrap";

const Listing = (props) => {
  const buyBookHandler = () => {
    console.log("Buying");
  };

  return (
    <Card.Body>
      <Table bordered hover striped variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN Number</th>
            <th>Price</th>
            <th>Language</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.books.length === 0 ? (
            <tr align="center">
              <td colSpan="6"> Books Available</td>
            </tr>
          ) : (
            props.books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbnNumber}</td>
                <td>{book.price}</td>
                <td>{book.language}</td>

                <td>
                  <ButtonGroup>
                    <Button
                      size="lg"
                      variant="outline-success"
                      onClick={buyBookHandler}
                    >
                      Buy
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Card.Body>
  );
};

export default Listing;
