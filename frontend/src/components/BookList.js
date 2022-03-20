import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Listing from "./Listing";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.findAllBooks();
  }

  findAllBooks() {
    fetch("http://localhost:8080/api/v1/books")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      });
  }

  render() {
    return (
      <div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Body>
            <FontAwesomeIcon icon={faList} /> Book List
          </Card.Body>
          <Listing books={this.state.books} />
        </Card>
      </div>
    );
  }
}

export default BookList;
