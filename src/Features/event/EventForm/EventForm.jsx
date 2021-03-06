import React, { Component } from 'react'
import {Segment, Form, Button} from 'semantic-ui-react'

 class EventForm extends Component {
    state = {
        event :{
            title : '',
            date :'',
            city : '',
            venue : '',
            hostedBy :''
        }
    }


    onFormsubmit =(evt) =>{
        evt.preventDefault();
        this.props.createEvent(this.state.event)
    }

    onInputchange = (evt) =>{
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value
        this.setState({
            event : newEvent
            
        })
    }
  render() {
      const {handleCancel} = this.props;
      const {event} =this.state
    return (
            <Segment>
              <Form onSubmit = {this.onFormsubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name = 'title' onChange = {this.onInputchange} value ={event.title} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name = 'date' onChange = {this.onInputchange} value ={event.date}type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name = 'city' onChange = {this.onInputchange} value ={event.city} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name = 'venue' onChange = {this.onInputchange} value ={event.venue}placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name = 'hostedBy' onChange = {this.onInputchange} value ={event.hostedBy} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick = {handleCancel} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default EventForm
