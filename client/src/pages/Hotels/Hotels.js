import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import $ from 'jquery';

import 'foundation-sites';

import 'react-dates/initialize';
import{ DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from "moment";


class Hotels extends Component {
  state = {
  	hotels: [],
  	location: "",
    check_in: "",
    check_out: ""
  };

  componentDidMount() {
    // this.loadHotels();
  };

  // loadHotels = () => {
  //   API.getHotels()
  //     .then(res =>
  //       this.setState({ hotels: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
		event.preventDefault();

		// parameters that are passed to get the Hotel results
		var params = {
			location: this.state.location,
			depart: moment(this.state.startDate).format('YYYY-MM-DD'),
			returns: moment(this.state.endDate).format('YYYY-MM-DD'),
		}
		
		// Axios promise for getting the Hotel results
		API.getHotels(params)
				.then(res => this.setState({ hotels: res.data }))
        .catch(err => console.log(err));
    // }
  };


render() {
	console.log(this.state.hotels)

	return (
		<Container fluid>
			<Row>
				<Col size="md-12">
					<section className="row columns">
						<div className="hero-section">
							<div className="hero-section-text">
								<h1>Hotels</h1>
								<h5>Need a Place to Stay?</h5>
							</div>
							<div className="translucent-form-overlay">
								<form>
									<div className="row columns"></div>
									<div className="floated-label-wrapper">	            
										<Input 
											value={this.state.location}
											onChange={this.handleInputChange} 
											id="hotel" 
											name="location" 
											placeholder="City" 
										/>
									</div>
									<div className="floated-label-wrapper">
									<DateRangePicker
										startDate={this.state.startDate} // momentPropTypes.momentObj or null,
										startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
										endDate={this.state.endDate} // momentPropTypes.momentObj or null,
										endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
										onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
										focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
										onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
									/>
									</div>
									<FormBtn
										disabled={!(this.state.startDate && this.state.endDate && this.state.location)}
										onClick={this.handleFormSubmit}>
										Search
									</FormBtn>
							</form>
							</div>
						</div>
					</section>
				</Col>
			</Row>
		</Container>			
	);
};

}

export default Hotels;