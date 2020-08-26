import React, {Component} from 'react';
import modely from './modely.jpg'

class Tesla extends Component {
  render() {
    return (
      <div>
        <h1>Tesla</h1>
        <img src={modely} alt="Yoels Tesla"></img>
        <p>Model: Model Y oel</p>
      </div>
    )
  }
}

export default Tesla;