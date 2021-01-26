import React, { Component } from 'react';
import axios from 'axios';

const Event = (props) => {
  <div className="col-12 col-lg-6">
    <div className="event-card">
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

    this.state = { events: [] };

    this.loadData = this.loadData.bind(this);
    this.eventsList = this.eventsList.bind(this);

    this.loadData();
  }

  loadData(){
    let self = this;
    axios.get('http://localhost:3005/events/')
    .then(response => {
      // console.log(response.data);
      self.setState({ events: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  eventsList() {
    const list = this.state.events.map((event) =>
      <Event event={event} key={event._id}/>
    );
    console.log(list);
    return(list);
  }

  render() {
    return (
      <div className="row">
        { this.eventsList() }
      </div>
    );
  }
}
