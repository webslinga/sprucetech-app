import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => (
  <tr>
    <td>{props.event.title}</td>
    <td>
      <Link to={"/edit-event/" + props.event._id } >edit</Link> | <a href="#" onClick={() => { props.deleteEvent(props.event._id) }}>delete</a>
    </td>
  </tr>
)

export default class EditDeleteEvents extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this);

    this.state = { events:[] };
  }

  componentDidMount() {
    axios.get('http://localhost:3005/events/')
      .then(response => {
        this.setState({ events:response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEvent(id) {
    axios.delete('http://localhost:3005/event/delete/' + id)
      .then(response => console.log(response.data));

    this.setState({ events: this.state.events.filter(element => element._id !== id) })
  }

  eventList() {
    return this.state.events.map(event => {
      return <Event event={event} deleteEvent={this.deleteEvent} key={event._id} />;
    })
  }

  render() {
    return (
      <div className="container-lg">
        <h1 className="my-5">Edit/Delete Events</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Event</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.eventList() }
          </tbody>
        </table>
      </div>
    );
  }
}
