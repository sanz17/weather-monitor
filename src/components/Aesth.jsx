import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export class Aesth extends Component {
  render() {
    return (
      <div>
        <Image src='../image/floral.jpg' thumbnail style={{'border':'none'}}/>
      </div>
    )
  }
}

export default Aesth