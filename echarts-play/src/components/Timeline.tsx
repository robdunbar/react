import { Component } from 'react';
import * as React from 'react';
import timeline from './timeline.png';

class Timeline extends Component {
  public render() {
    return (
      <div className="timeline">
        <img src={timeline} />
      </div>
    );
  }
}

export default Timeline;
