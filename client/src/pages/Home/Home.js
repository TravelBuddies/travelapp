import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

class Home extends Component {
  state = {
    Home: [],
  // update here if any form details that are needed to be empty.
  };

  componentDidMount() {
    // Mounting the Most common deals that are found for specific destinations we choose. 
    // this.loadFlights();
    // this.loadInspirationFlights();
    // this.loadPackageDeals();
  }

  loadFlights = () => {
    API.getFlights()
      .then(res =>
        this.setState({ flights: res.data, title: "", author: "", synopsis: "" }) // make sure to empty the strings on the screen.
      )
      .catch(err => console.log(err));
  };


//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveFlight({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadFlights())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav></Nav>
        <Hero></Hero>
        <Contact></Contact>
        <Footer></Footer>
        <Container fluid>
          <Row>
            <Col size="md-6">
              {/* <Jumbotron> */}
                <h1>What Books Should I Read?</h1>
              {/* </Jumbotron> */}
              {/* <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form> */}
            </Col>
            {/* <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col> */}
          </Row>
        </Container>
      </div>  
    );
  }
}

export default Home;