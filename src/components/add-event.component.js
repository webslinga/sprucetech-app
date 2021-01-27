import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default class AddEvent extends Component {

  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeFeatured = this.onChangeFeatured.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      date: new Date(),
      time: '',
      location: '',
      featured: false,
      type: '',
      description: ''
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDate(date){
    this.setState({
      date: date
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeFeatured(e) {
    this.setState({
      featured: !this.state.featured
      // featured: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      title: this.state.title,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      featured: this.state.featured,
      type: this.state.type,
      description: this.state.description
    };

    console.log(event);

    axios.post('http://localhost:3005/event/add/', event)
      .then(response => console.log(response.data));

    // window.location = '/add-event';
  }

  render() {
    return (
      <div className="container-lg">
        <h1 className="my-5">Add Event</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="d-block">Title</label>
            <input required type='text' value={this.state.title} onChange={this.onChangeTitle} />
          </div>
          <div className="form-group">
            <label className="d-block">Date</label>
            <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
          </div>
          <div className="form-group">
            <label  className="d-block">Time</label>
            <select name="time" value={this.state.value} onChange={this.onChangeTime}>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Location</label>
            <input required type='text' value={this.state.location} onChange={this.onChangeLocation} />
          </div>
          <div className="form-group">
            <label  className="d-block">Featured</label>
            <input type="checkbox" defaultChecked={this.state.featured} onChange={this.onChangeFeatured} />
          </div>
          <div className="form-group">
            <label  className="d-block">Type</label>
            <select name="time" value={this.state.type} onChange={this.onChangeType}>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
              <option value="rsvp">RSVP</option>
              <option value="annual">Annual</option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Description</label>
            <input required type='text' value={this.state.description} onChange={this.onChangeDescription} />
          </div>
          <div className="form-group">
            <input type="Submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
