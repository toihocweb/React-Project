import React, { Component } from 'react'
import {Image , List} from 'semantic-ui-react'
class EventListAttandee extends Component {
  render() {
    const {info} = this.props
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={info.photoURL}/>
      </List.Item>
    )
  }
}
export default EventListAttandee;