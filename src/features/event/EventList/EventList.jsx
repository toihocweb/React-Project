import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const {events, onOpenEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
            <EventListItem onOpenEvent = {onOpenEvent} key={event.id} event={event} />
        ))}
      </div>
    )
  }
}
export default EventList;