import { Component } from 'react';
import * as React from 'react';
import TraceChart from './TraceChart';

class TraceOverview extends Component {
  public render() {
    return (
      <div className="charts">
        <TraceChart />
      </div>
    );
  }
}

export default TraceOverview;
