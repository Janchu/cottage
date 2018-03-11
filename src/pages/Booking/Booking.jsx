import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import Calendar from '../../components/Calendar';
import MessageBoard from '../../components/MessageBoard';

const propTypes = {
  bookings: PropTypes.array,
  user: PropTypes.string.isRequired,
  fetchBookings: PropTypes.func.isRequired,
  createBooking: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const defaultProps = {
  bookings: [],
};

class Booking extends Component {
  componentWillMount = () => this.props.fetchBookings()

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Calendar
              bookings={this.props.bookings}
              user={this.props.user}
              createBooking={booking => this.props.createBooking(booking)}
              deleteBooking={id => this.props.deleteBooking(id)}
            />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <MessageBoard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Booking.propTypes = propTypes;
Booking.defaultProps = defaultProps;

export default Booking;
