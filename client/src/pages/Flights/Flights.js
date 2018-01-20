import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Flight extends Component {
  state = {
    flight: []
   
  };

  componentDidMount() {
    this.loadFlight();
  }

  loadFlight = () => {
    API.getFlights()
      .then(res =>
        this.setState({ flight: res.data })
      )
      .catch(err => console.log(err));
  };