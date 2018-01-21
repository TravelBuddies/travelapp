import axios from "axios";


export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getFlights: function () {
    return axios.get("/api/flights");
  },
  getInspirationFlights: function() {
    return axios.get("/api/inspirationflights");    
  },
  getCars: function () {
    return axios.get("/api/cars");
  },
  getHotels: function () {
    return axios.get("/api/hotels");
  },

};

// import axios from 'axios'

// export default {

//   // Gets all users
//   getUsers: () => (axios.get('/users')),

//   // Gets all conversations
//   getConversations: () => (axios.get('/conversations')),

//   // Gets the conversation with the given id
//   getConversation: id => (axios.get(`/conversations/${id}`)),

//   // Saves a book to the database
//   createConversation: convo => (axios.post('/conversations', convo)),

//   // Saves a book to the database
//   saveMessage: msg => (axios.post('/messages', msg)),

//   signup: credentials => (axios.post('/signup', credentials)),

//   login: credentials => (axios.post('/login', credentials)),

//   checkForSession: credentials => (axios.get('/session')),

// }