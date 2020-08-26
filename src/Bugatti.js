import React, {Component} from 'react';
import bugattiY from './bugattiY.jpg'

class Bugatti extends Component {
  render() {
    return (
      <div>
        <h1>Bugatti</h1>
        <img src={bugattiY} alt="Yoels Bugatti"></img>
        <p>Model: YATman</p>
      </div>
    )
  }
}

export default Bugatti;