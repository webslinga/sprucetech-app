import React, { Component } from 'react';

export default class Carousel extends Component {
  render() {
    return (

      <div class="carousel-block">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">

                  <div class="row">
                    <div class="col-12 col-lg-6 text-center">
                      <img src="/images/prospectpark-e1497909025369.jpg" alt="...">
                    </div>
                    <div class="col-12 col-lg-6 d-flex align-items-stretch">
                      <div class="carousel-event-card annual">
                        <div class="row">
                          <div class="col-3">
                            <div class="event-date">
                              <span class="month">January</span>
                              <span class="date">11</span>
                              <span class="time">9:30pm</span>
                            </div>
                          </div>
                          <div class="col-9">
                            <h3>Event Title</h3>
                            <h4>Location</h4>
                            <a href="#" class="directions-link">Directions</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elit auctor, imperdiet risus vel, eleifend metus. Sed sit amet cursus eros. Mauris hendrerit iaculis volutpat. Vestibulum facilisis rutrum dolor, vel eleifend augue iaculis in [...]</p>
                            <button type="button" name="button" class="light-bg-button">Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-1"></div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">

                  <div class="row">
                    <div class="col-12 col-lg-6 text-center">
                      <img src="/images/prospectpark-e1497909025369.jpg" alt="...">
                    </div>
                    <div class="col-12 col-lg-6 d-flex align-items-stretch">
                      <div class="carousel-event-card paid">
                        <div class="row">
                          <div class="col-3">
                            <div class="event-date">
                              <span class="month">January</span>
                              <span class="date">11</span>
                              <span class="time">9:30pm</span>
                            </div>
                          </div>
                          <div class="col-9">
                            <h3>Event Title</h3>
                            <h4>Location</h4>
                            <a href="#" class="directions-link">Directions</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elit auctor, imperdiet risus vel, eleifend metus. Sed sit amet cursus eros. Mauris hendrerit iaculis volutpat. Vestibulum facilisis rutrum dolor, vel eleifend augue iaculis in [...]</p>
                            <button type="button" name="button" class="light-bg-button">Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-1"></div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">

                  <div class="row">
                    <div class="col-12 col-lg-6 text-center">
                      <img src="/images/prospectpark-e1497909025369.jpg" alt="...">
                    </div>
                    <div class="col-12 col-lg-6 d-flex align-items-stretch">
                      <div class="carousel-event-card rsvp">
                        <div class="row">
                          <div class="col-3">
                            <div class="event-date">
                              <span class="month">January</span>
                              <span class="date">11</span>
                              <span class="time">9:30pm</span>
                            </div>
                          </div>
                          <div class="col-9">
                            <h3>Event Title</h3>
                            <h4>Location</h4>
                            <a href="#" class="directions-link">Directions</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elit auctor, imperdiet risus vel, eleifend metus. Sed sit amet cursus eros. Mauris hendrerit iaculis volutpat. Vestibulum facilisis rutrum dolor, vel eleifend augue iaculis in [...]</p>
                            <button type="button" name="button" class="light-bg-button">Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>

    );
  }
}
