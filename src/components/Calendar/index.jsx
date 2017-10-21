import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('fi');
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


const propTypes = {
  bookings: PropTypes.array,
  user: PropTypes.string.isRequired,
  createBooking: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
};

const defaultProps = { bookings: [] };


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.addReservation = this.addReservation.bind(this);
    this.removeReservation = this.removeReservation.bind(this);
  }

  // TODO get name from redux
  addReservation(slotInfo) {
    this.props.createBooking({
      title: this.props.user, start: slotInfo.start, end: slotInfo.end,
    });
    // if (!this.state.events.find(x => x.start.getDate() === slotInfo.start.getDate())) {
    //   const updatedEvents = this.state.events;
    //   console.log(slotInfo);
    //   const reservation = {
    //     title: 'Janne', allDay: true, start: slotInfo.start, end: slotInfo.end,
    //   };
    //   updatedEvents.push(reservation);
    //   this.setState({ events: updatedEvents });
    // }
  }

  removeReservation(slotInfo) {
    console.log(slotInfo);
    this.props.deleteBooking(slotInfo._id);
    // TODO don't allow remove reservations with someone elses name
    // const updatedEvents = this.state.events.filter(x => x !== event);
    // this.setState({ events: updatedEvents });
  }

  render() {
    return (
      <div style={{ height: 500 }}>
        <BigCalendar
          selectable
          events={this.props.bookings}
          views={['month']}
          messages={{ today: 'Nykyinen kuukausi', next: 'Seuraava kuukausi', previous: 'Edellinen kuukausi' }}
          defaultDate={new Date()}
          onSelectSlot={this.addReservation}
          onSelectEvent={this.removeReservation}
        />
      </div>
    );
  }
}

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
