import React, { Component } from 'react'
import { Grid,Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/40.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/52.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/12.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/14.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {

    state = {
       events: eventsDashboard,
       selectedEvent : null,
       isOpen : false,
    }
 
  
  handleFormOpen = () => {
    this.setState({
      selectedEvent:null,
      isOpen : true
    })
  }
  handleFormClose = () => {
    this.setState({
      isOpen : false
    })
  }
  handleOpenEvent = (onOpenEvent) => () => {
    this.setState({
      selectedEvent : onOpenEvent,
      isOpen: true
    })
  } 

  handleUpdateEvent = (onUpdateEvent) => {
    this.setState({
      events : this.state.events.map((event) => {
        if (event.id === onUpdateEvent.id){
          return Object.assign({} , onUpdateEvent)
        }else{
          return event
        }
      })
       
  })
}


  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = 'https://randomuser.me/portraits/women/36.jpg';
    const updateEvent = [...this.state.events , newEvent];
    this.setState({
      events: updateEvent,
      isOpen : false,
    })
  }
  render() { 
    const {selectedEvent} = this.state
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <EventList onOpenEvent = {this.handleOpenEvent}  events={this.state.events}/>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button positive content="Create Event" onClick={this.handleFormOpen}/>
              {this.state.isOpen &&
                <EventForm selectedEvent = {selectedEvent}  createEvent = {this.handleCreateEvent}  handleCancel = {this.handleFormClose} />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default EventDashboard;