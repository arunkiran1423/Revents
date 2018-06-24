import React, { Component } from 'react'
import EventListitem from './EventListitem'


 class EventList extends Component {
  render() {
      const {events} = this.props;
    return (
      <div>
          <h1>EventList</h1>
          {events.map((event)=> (<EventListitem key = {event.id} event = {event}/>)
         )}
          
        
      </div>
    )
  }
}

export default EventList