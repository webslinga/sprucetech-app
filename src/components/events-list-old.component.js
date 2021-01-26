import React, { Component } from 'react';
import axios from 'axios';

const Event = props => {
  <div className="col-12 col-lg-6">
    <div className="event-card {props.event.type}">
      <div className="row">
        <div className="col-3">
          <div className="event-date">
            <span className="date"></span>
            <span className="time"></span>
          </div>
        </div>
        <div className="col-9">
          <h4 className="day"></h4>
          <h3>{props.event.title}</h3>
          <h4 className="location">{props.event.location}</h4>
          <p>{props.event.description}</p>
          <a href="#" className="learn-more-link">Learn More</a>
        </div>
      </div>
    </div>
  </div>
}

export default class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: '',
      title: '',
      type: '',
      location: '',
      description: ''
    };

    this.eventsList = this.eventsList.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3005/events/')
    .then(response => {
      this.setState({
        title: response.data.title,
        type: response.data.type,
        location: response.data.location,
        description: response.data.description
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  eventsList() {
    return this.state.events.map((currentevent,id) => {
      return <Event title={currentevent.title} type={currentevent.type} location={currentevent.location} description={currentevent.description} key={id} />;
    });
  }

  render() {
    return (
      <div className="row">
        { this.eventsList() }
      </div>
    );
  }
}
